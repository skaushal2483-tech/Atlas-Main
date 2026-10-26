import { useEffect, useState } from "react";
import Sidebar from "../components/shared/Sidebar";

import PRHeader from "../components/personalRecords/PRHeader";
import PRAddCard from "../components/personalRecords/PRAddCard";
import PRDisplayCard from "../components/personalRecords/PRDisplayCard";
import PRModal from "../components/personalRecords/PRModal";

import "../styles/personalRecords/PersonalRecordsPage.css";

const STORAGE_KEY = "atlas_personal_records";

function PersonalRecordsPage({ isDark, setIsDark }) {
  const [records, setRecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recordToEdit, setRecordToEdit] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load saved personal records.
  useEffect(() => {
    try {
      const savedRecords = localStorage.getItem(STORAGE_KEY);

      if (savedRecords) {
        const parsedRecords = JSON.parse(savedRecords);

        if (Array.isArray(parsedRecords)) {
          setRecords(parsedRecords);
        }
      }
    } catch (error) {
      console.error("Failed to load personal records:", error);
    } finally {
      setHasLoaded(true);
    }
  }, []);

  // Save records whenever they change.
  useEffect(() => {
    if (!hasLoaded) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    } catch (error) {
      console.error("Failed to save personal records:", error);
    }
  }, [records, hasLoaded]);

  const handleOpenCreate = () => {
    setRecordToEdit(null);
    setIsModalOpen(true);
  };

  const handleEdit = (record) => {
    setRecordToEdit(record);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setRecordToEdit(null);
  };

  const handleSave = (recordData) => {
    if (recordData.id) {
      setRecords((previousRecords) =>
        previousRecords.map((record) =>
          record.id === recordData.id
            ? { ...record, ...recordData }
            : record
        )
      );
    } else {
      const newRecord = {
        ...recordData,
        id: crypto.randomUUID(),
      };

      setRecords((previousRecords) => [
        newRecord,
        ...previousRecords,
      ]);
    }

    handleCloseModal();
  };

  const handleDelete = (recordId) => {
    const record = records.find((item) => item.id === recordId);

    if (!record) return;

    const confirmed = window.confirm(
      `Delete your ${record.exercise} personal record?`
    );

    if (!confirmed) return;

    setRecords((previousRecords) =>
      previousRecords.filter((item) => item.id !== recordId)
    );
  };

  return (
    <div className="pr-page">
      <Sidebar isDark={isDark} setIsDark={setIsDark} />

      <main className="pr-page-main">
        <div className="pr-page-container">
          <PRHeader />

          <section className="pr-page-grid" aria-label="Personal records">
            <PRAddCard onClick={handleOpenCreate} />

            {records.map((record) => (
              <PRDisplayCard
                key={record.id}
                record={record}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </section>
        </div>
      </main>

      <PRModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        record={recordToEdit}
      />
    </div>
  );
}

export default PersonalRecordsPage;
