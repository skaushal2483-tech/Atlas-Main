import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../components/shared/Sidebar";
import DailyLogHeader from "../components/meals/DailyLogHeader";
import NutritionSummary from "../components/meals/NutritionSummary";
import NutritionTargets from "../components/meals/NutritionTargets";
import MealList from "../components/meals/MealList";
import AddMealModal from "../components/meals/AddMealModal";

import "../styles/meals/DailyMealLog.css";

const STORAGE_KEY = "atlas_daily_meal_logs";

const EMPTY_TARGETS = {
  calories: 0,
  protein: 0,
  carbs: 0,
  fats: 0,
};

function readAllLogs() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Could not read daily meal logs:", error);
    return [];
  }
}

function saveDailyLog(date, targets, meals) {
  if (!date) return;

  const logs = readAllLogs();

  const existingIndex = logs.findIndex(
    (log) => log.date === date
  );

  const previousLog =
    existingIndex !== -1 ? logs[existingIndex] : null;

  const savedLog = {
    date,
    targets,
    meals,
    createdAt:
      previousLog?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const updatedLogs =
    existingIndex !== -1
      ? logs.map((log, index) =>
        index === existingIndex ? savedLog : log
      )
      : [...logs, savedLog];

  updatedLogs.sort((a, b) => b.date.localeCompare(a.date));

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedLogs)
  );
}

function DailyMealLog({ isDark, setIsDark }) {
  const navigate = useNavigate();
  const { date: routeDate } = useParams();

  const selectedDate = routeDate || "";

  const [targets, setTargets] = useState(EMPTY_TARGETS);
  const [meals, setMeals] = useState([]);
  const [isTargetsOpen, setIsTargetsOpen] = useState(false);
  const [isAddMealOpen, setIsAddMealOpen] = useState(false);

  useEffect(() => {
    if (!selectedDate) {
      setTargets(EMPTY_TARGETS);
      setMeals([]);
      return;
    }

    const logs = readAllLogs();

    const existingLog = logs.find(
      (log) => log.date === selectedDate
    );

    setTargets({
      ...EMPTY_TARGETS,
      ...(existingLog?.targets || {}),
    });

    setMeals(
      Array.isArray(existingLog?.meals)
        ? existingLog.meals
        : []
    );
  }, [selectedDate]);

  const totals = useMemo(() => {
    return meals.reduce(
      (total, meal) => {
        const foods = Array.isArray(meal.foods)
          ? meal.foods
          : [];

        foods.forEach((food) => {
          total.calories += Number(food.calories) || 0;
          total.protein += Number(food.protein) || 0;
          total.carbs += Number(food.carbs) || 0;
          total.fats += Number(food.fats) || 0;
        });

        return total;
      },
      {
        calories: 0,
        protein: 0,
        carbs: 0,
        fats: 0,
      }
    );
  }, [meals]);

  const handleDateChange = (newDate) => {
    if (!newDate || newDate === selectedDate) return;

    navigate(`/meals/${newDate}`);
  };

  const handleSaveTargets = (newTargets) => {
    if (!selectedDate) return;

    const updatedTargets = {
      ...EMPTY_TARGETS,
      ...newTargets,
    };

    try {
      saveDailyLog(selectedDate, updatedTargets, meals);
      setTargets(updatedTargets);
    } catch (error) {
      console.error("Could not save nutrition targets:", error);
    }
  };

  const handleAddMeal = ({ mealName, food }) => {
    if (!selectedDate) {
      setIsAddMealOpen(false);
      return;
    }

    const normalizedMealName = mealName.trim().toLowerCase();

    if (!normalizedMealName || !food?.name?.trim()) {
      return;
    }

    const existingMealIndex = meals.findIndex(
      (meal) =>
        meal.name.trim().toLowerCase() === normalizedMealName
    );

    let updatedMeals;

    if (existingMealIndex !== -1) {
      updatedMeals = meals.map((meal, index) =>
        index === existingMealIndex
          ? {
            ...meal,
            foods: [...(meal.foods || []), food],
          }
          : meal
      );
    } else {
      updatedMeals = [
        ...meals,
        {
          id: Date.now(),
          name: mealName.trim(),
          foods: [food],
        },
      ];
    }

    try {
      saveDailyLog(selectedDate, targets, updatedMeals);
      setMeals(updatedMeals);
      setIsAddMealOpen(false);
    } catch (error) {
      console.error("Could not save meal:", error);
    }
  };

  const handleEndDay = () => {
    if (!selectedDate) return;

    try {
      saveDailyLog(selectedDate, targets, meals);
      navigate("/meals");
    } catch (error) {
      console.error("Could not save daily meal log:", error);
    }
  };

  return (
    <div className="daily-meal-log-page">
      <Sidebar
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <main className="daily-meal-log-main">
        <div className="daily-meal-log-container">
          <DailyLogHeader
            date={selectedDate}
            onDateChange={handleDateChange}
          />

          <NutritionSummary
            totals={totals}
            targets={targets}
            onEditTargets={() => {
              if (!selectedDate) return;

              setIsTargetsOpen(true);
            }}
          />

          <MealList
            meals={meals}
            onAddMeal={() => {
              if (!selectedDate) return;

              setIsAddMealOpen(true);
            }}
          />

          <div className="daily-meal-log-footer">
            <p>
              Make today count. Your progress starts with consistency.
            </p>

            <button
              type="button"
              className="daily-meal-log-end-button"
              onClick={handleEndDay}
            >
              End Day <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </main>

      <NutritionTargets
        isOpen={isTargetsOpen}
        targets={targets}
        onSave={handleSaveTargets}
        onClose={() => setIsTargetsOpen(false)}
      />

      <AddMealModal
        isOpen={isAddMealOpen}
        onSave={handleAddMeal}
        onClose={() => setIsAddMealOpen(false)}
      />
    </div>
  );
}

export default DailyMealLog;
