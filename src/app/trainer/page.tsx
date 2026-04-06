import { scenarios } from "@/data/scenarios";

const scorecardRows = [
  "Empathy / acknowledgment",
  "Clarifying questions",
  "Value-based response",
  "Confidence / professionalism",
  "Next-step close"
];

export default function TrainerPage() {
  return (
    <main className="space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">Manager / Trainer Mode</h1>
        <p className="mt-2 text-sm text-slate-700">
          Use this page to run live objection-handling drills. It includes scenario notes, a scorecard template, and simple facilitation instructions.
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Training session instructions</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Pick a scenario and assign one rep to role-play while another observes.</li>
          <li>Give the rep 60 seconds to respond naturally, no script.</li>
          <li>Score against the five-category rubric below.</li>
          <li>Coach one strength and one improvement area, then repeat in retry mode.</li>
          <li>Rotate reps and increase difficulty by shortening prep time.</li>
        </ol>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Printable scorecard template</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-300 p-2">Category</th>
                <th className="border border-slate-300 p-2">Score (1-5)</th>
                <th className="border border-slate-300 p-2">Coach Notes</th>
              </tr>
            </thead>
            <tbody>
              {scorecardRows.map((row) => (
                <tr key={row}>
                  <td className="border border-slate-300 p-2 font-medium">{row}</td>
                  <td className="border border-slate-300 p-2">&nbsp;</td>
                  <td className="border border-slate-300 p-2">&nbsp;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">Print this page (Ctrl/Cmd + P) for live sessions.</p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Scenario coaching notes</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {scenarios.map((scenario) => (
            <article key={scenario.id} className="rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{scenario.category}</p>
              <h3 className="mt-1 text-base font-semibold">{scenario.title}</h3>
              <p className="mt-2 text-sm text-slate-700">
                <span className="font-medium">Objective:</span> {scenario.objective}
              </p>
              <p className="mt-1 text-sm text-slate-700">
                <span className="font-medium">Recommended approach:</span> {scenario.recommendedApproach}
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {scenario.coachingTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
