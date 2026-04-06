import { Scenario } from "@/types/scenario";

interface IdealResponseCardProps {
  scenario: Scenario;
}

export const IdealResponseCard = ({ scenario }: IdealResponseCardProps) => (
  <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <h3 className="text-lg font-semibold">Ideal response</h3>

    <div>
      <p className="text-sm font-semibold text-slate-700">Model answer</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-700">{scenario.idealResponse}</p>
    </div>

    <div>
      <p className="text-sm font-semibold text-slate-700">Why it works</p>
      <p className="mt-1 text-sm text-slate-700">{scenario.whyItWorks}</p>
    </div>

    <div>
      <p className="text-sm font-semibold text-slate-700">Mistakes to avoid</p>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-700">
        {scenario.commonMistakes.map((mistake) => (
          <li key={mistake}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div>
      <p className="text-sm font-semibold text-slate-700">Suggested follow-up question</p>
      <p className="mt-1 text-sm text-slate-700">{scenario.followUpQuestion}</p>
    </div>
  </section>
);
