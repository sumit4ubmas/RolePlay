import Link from "next/link";

import { Scenario } from "@/types/scenario";

interface ScenarioCardProps {
  scenario: Scenario;
}

export const ScenarioCard = ({ scenario }: ScenarioCardProps) => {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{scenario.category}</span>
        <span className="text-xs font-medium text-slate-500">{scenario.difficulty}</span>
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{scenario.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-slate-600">{scenario.objection}</p>
      <div className="mt-4 flex gap-2">
        <Link
          href={`/scenario/${scenario.id}`}
          className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          View Scenario
        </Link>
        <Link href={`/practice?scenario=${scenario.id}`} className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Start Practice
        </Link>
      </div>
    </article>
  );
};
