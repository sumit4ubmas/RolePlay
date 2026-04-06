import { Scenario } from "@/types/scenario";

interface ScenarioMetaProps {
  scenario: Scenario;
}

export const ScenarioMeta = ({ scenario }: ScenarioMetaProps) => (
  <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-2">
      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{scenario.category}</span>
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{scenario.difficulty}</span>
    </div>

    <h1 className="text-2xl font-bold text-slate-900">{scenario.title}</h1>

    <div className="space-y-3 text-sm leading-relaxed text-slate-700">
      <p>
        <span className="font-semibold">Prospect background:</span> {scenario.background}
      </p>
      <p>
        <span className="font-semibold">Customer objection:</span> “{scenario.objection}”
      </p>
      <p>
        <span className="font-semibold">Training objective:</span> {scenario.objective}
      </p>
      <p>
        <span className="font-semibold">Recommended approach:</span> {scenario.recommendedApproach}
      </p>
    </div>
  </section>
);
