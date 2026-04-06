import { EvaluationResult } from "@/types/scenario";

interface EvaluationPanelProps {
  result: EvaluationResult;
}

export const EvaluationPanel = ({ result }: EvaluationPanelProps) => {
  return (
    <section className="space-y-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <header className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Score rubric</h3>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">{result.totalScore}/25</span>
      </header>

      <div className="space-y-3">
        {result.breakdown.map((item) => (
          <div key={item.name} className="rounded-lg border border-slate-200 p-3">
            <div className="flex items-center justify-between">
              <p className="font-medium text-slate-800">{item.name}</p>
              <p className="text-sm font-semibold text-slate-700">{item.score}/5</p>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {item.matchedKeywords.length > 0 ? `Matched: ${item.matchedKeywords.join(", ")}` : "No strong signal detected yet."}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <h4 className="text-sm font-semibold text-green-700">Strengths</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {result.strengths.length > 0 ? result.strengths.map((item) => <li key={item}>{item}</li>) : <li>Keep practicing to build strengths.</li>}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-amber-700">Missed opportunities</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {result.missedOpportunities.length > 0 ? (
              result.missedOpportunities.map((item) => <li key={item}>{item}</li>)
            ) : (
              <li>No major misses. Strong response.</li>
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-blue-700">Coaching suggestions</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {result.coachingSuggestions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
