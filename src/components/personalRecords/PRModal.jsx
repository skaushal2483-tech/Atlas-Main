import { useEffect, useState } from "react";
import "../../styles/personalRecords/PRModal.css";

const getInitialForm = (record) => ({
  exercise: record?.exercise || "",
  weight: record?.weight ?? "",
  rmValue: record?.rmValue ?? "",
  date: record?.date || new Date().toISOString().slice(0, 10),
});

function PRModal({ isOpen, onClose, onSave, record = null }) {
  const [form, setForm] = useState(() => getInitialForm(record));
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setForm(getInitialForm(record));
      setError("");
    }
  }, [isOpen, record]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const exercise = form.exercise.trim();
    const weight = Number(form.weight);
    const rmValue = Number(form.rmValue);

    if (!exercise) {
      setError("Please enter an exercise name.");
      return;
    }

    if (
      form.weight === "" ||
      !Number.isFinite(weight) ||
      weight <= 0
    ) {
      setError("Please enter a weight greater than zero.");
      return;
    }

    if (
      form.rmValue === "" ||
      !Number.isInteger(rmValue) ||
      rmValue < 1
    ) {
      setError("Please enter a valid RM value.");
      return;
    }

    if (!form.date) {
      setError("Please select the date you achieved this record.");
      return;
    }

    onSave?.({
      ...(record?.id ? { id: record.id } : {}),
      exercise,
      weight,
      rmValue,
      recordType: "rm",
      date: form.date,
    });
  };

  return (
    <div className="pr-modal-overlay">
      <section
        className="pr-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pr-modal-title"
      >
        <div className="pr-modal-header">
          <div className="pr-modal-heading">
            <span className="pr-modal-eyebrow">
              YOUR FITNESS JOURNEY
            </span>

            <h2 id="pr-modal-title">
              {record ? "Edit Personal Record" : "Add Personal Record"}
            </h2>
          </div>

          <button
            type="button"
            className="pr-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <form className="pr-modal-form" onSubmit={handleSubmit}>
          <div className="pr-modal-field">
            <input
              id="pr-exercise"
              name="exercise"
              type="text"
              placeholder="Exercise name (e.g. Bench Press)"
              aria-label="Exercise name"
              value={form.exercise}
              onChange={handleChange}
              maxLength={80}
              autoFocus
              required
            />
          </div>

          <div className="pr-modal-field">
            <input
              id="pr-weight"
              name="weight"
              type="number"
              placeholder="Weight (kg)"
              aria-label="Weight in kilograms"
              value={form.weight}
              onChange={handleChange}
              min="0.1"
              step="any"
              required
            />
          </div>

          <div className="pr-modal-field">
            <input
              id="pr-rm-value"
              name="rmValue"
              type="number"
              placeholder="Rep max (RM)"
              aria-label="Rep max"
              value={form.rmValue}
              onChange={handleChange}
              min="1"
              step="1"
              required
            />
          </div>

          <div className="pr-modal-field">
            <input
              id="pr-date"
              name="date"
              type="date"
              aria-label="Date achieved"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>

          {error && (
            <p className="pr-modal-error" role="alert">
              {error}
            </p>
          )}

          <div className="pr-modal-actions">
            <button type="submit" className="pr-modal-save">
              {record ? "SAVE CHANGES" : "SAVE PR"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default PRModal;
