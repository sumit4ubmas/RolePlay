"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "roleplay-progress";

export const useProgress = () => {
  const [completedScenarioIds, setCompletedScenarioIds] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as string[];
        setCompletedScenarioIds(parsed);
      } catch {
        // Ignore malformed local storage data.
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedScenarioIds));
  }, [completedScenarioIds]);

  const markComplete = (scenarioId: string) => {
    setCompletedScenarioIds((current) => (current.includes(scenarioId) ? current : [...current, scenarioId]));
  };

  const resetProgress = () => setCompletedScenarioIds([]);

  return { completedScenarioIds, markComplete, resetProgress };
};
