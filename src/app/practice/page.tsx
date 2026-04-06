"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { EvaluationPanel } from "@/components/EvaluationPanel";
import { IdealResponseCard } from "@/components/IdealResponseCard";
import { ProgressBar } from "@/components/ProgressBar";
import { scenarios } from "@/data/scenarios";
import { useProgress } from "@/hooks/useProgress";
import { evaluateResponse } from "@/lib/scoring";
import { EvaluationResult } from "@/types/scenario";

const getScenarioIndexById = (id: string | null) => {
  if (!id) return 0;
  const index = scenarios.findIndex((scenario) => scenario.id === id);
  return index >= 0 ? index : 0;
};

export default function PracticePage() {
  const searchParams = useSearchParams();
  const initialScenarioId = searchParams.get("scenario");

  const [scenarioIndex, setScenarioIndex] = useState(() => getScenarioIndexById(initialScenarioId));
  const [response, setResponse] = useState("");
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [showIdeal, setShowIdeal] = useState(false);

  const { completedScenarioIds, markComplete } = useProgress();

  const currentScenario = scenarios[scenarioIndex];
  const isLast = scenarioIndex === scenarios.length - 1;

  const completionCount = useMemo(() => {
    const withCurrent = completedScenarioIds.includes(currentScenario.id)
      ? completedScenarioIds
      : [...completedScenarioIds, currentScenario.id];
    return withCurrent.length;
  }, [completedScenarioIds, currentScenario.id]);

  const handleEvaluate = () => {
    const result = evaluateResponse(response, currentScenario);
    setEvaluation(result);
    markComplete(currentScenario.id);
  };

  const handleTryAgain = () => {
    setResponse("");
    setEvaluation(null);
    setShowIdeal(false);
  };

  const handleNextScenario = () => {
    if (isLast) {
      setScenarioIndex(0);
    } else {
      setScenarioIndex((value) => value + 1);
    }
    setResponse("");
    setEvaluation(null);
    setShowIdeal(false);
  };

  const randomizeScenario = () => {
    const nextIndex = Math.floor(Math.random() * scenarios.length);
    setScenarioIndex(nextIndex);
    setResponse("");
    setEvaluation(null);
    setShowIdeal(false);
  };

  return (
    <main className="space-y-5">
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Practice mode</h1>
            <p className="mt-1 text-sm text-slate-600">Scenario-based objection handling with coaching feedback.</p>
          </div>
          <button
            type="button"
            onClick={randomizeScenario}
            className="no-print rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Role-play Randomizer
          </button>
        </div>

        <ProgressBar current={completionCount} total={scenarios.length} />
      </div>

      <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{currentScenario.category}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{currentScenario.difficulty}</span>
        </div>

        <h2 className="text-xl font-semibold">{currentScenario.title}</h2>
        <p className="text-sm text-slate-700">
          <span className="font-semibold">Context:</span> {currentScenario.background}
        </p>
        <p className="rounded-lg bg-slate-100 p-3 text-sm text-slate-800">
          <span className="font-semibold">Customer says:</span> “{currentScenario.objection}”
        </p>

        <label className="mt-3 block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Your response</span>
          <textarea
            value={response}
            onChange={(event) => setResponse(event.target.value)}
            placeholder="Type what you would say in a real conversation..."
            className="min-h-40 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none ring-blue-500 transition focus:ring-2"
          />
        </label>

        <div className="no-print flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleEvaluate}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Evaluate My Response
          </button>
          <button
            type="button"
            onClick={() => setShowIdeal((value) => !value)}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            {showIdeal ? "Hide Ideal Response" : "Show Ideal Response"}
          </button>
          <button
            type="button"
            onClick={handleTryAgain}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Try Again
          </button>
          <button
            type="button"
            onClick={handleNextScenario}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Next Scenario
          </button>
        </div>

        {!response.trim() && (
          <p className="text-sm text-amber-700">Tip: enter your response before evaluating to get meaningful feedback.</p>
        )}
      </section>

      {evaluation && <EvaluationPanel result={evaluation} />}

      {showIdeal && <IdealResponseCard scenario={currentScenario} />}

      <div className="no-print">
        <Link href="/" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
          ← Back to scenarios
        </Link>
      </div>
    </main>
  );
}
