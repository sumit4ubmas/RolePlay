import Link from "next/link";
import { notFound } from "next/navigation";

import { IdealResponseCard } from "@/components/IdealResponseCard";
import { ScenarioMeta } from "@/components/ScenarioMeta";
import { getScenarioById } from "@/data/scenarios";

interface ScenarioPageProps {
  params: Promise<{ id: string }>;
}

export default async function ScenarioPage({ params }: ScenarioPageProps) {
  const { id } = await params;
  const scenario = getScenarioById(id);

  if (!scenario) {
    notFound();
  }

  return (
    <main className="space-y-6">
      <ScenarioMeta scenario={scenario} />
      <IdealResponseCard scenario={scenario} />

      <div className="no-print flex flex-wrap gap-3">
        <Link href={`/practice?scenario=${scenario.id}`} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Start Practice
        </Link>
        <Link href="/" className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
