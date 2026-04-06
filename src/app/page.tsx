"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { ScenarioCard } from "@/components/ScenarioCard";
import { SearchAndFilter } from "@/components/SearchAndFilter";
import { scenarioCategories, scenarios } from "@/data/scenarios";
import { CategoryTag } from "@/types/scenario";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryTag | "All">("All");

  const filteredScenarios = useMemo(() => {
    return scenarios.filter((scenario) => {
      const matchesCategory = selectedCategory === "All" ? true : scenario.category === selectedCategory;
      const normalized = query.toLowerCase();
      const matchesQuery =
        scenario.title.toLowerCase().includes(normalized) ||
        scenario.objection.toLowerCase().includes(normalized) ||
        scenario.category.toLowerCase().includes(normalized);

      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  return (
    <main className="space-y-6">
      <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-md">
        <h1 className="text-3xl font-bold">Objection Handling Role-Play Trainer</h1>
        <p className="mt-3 max-w-3xl text-blue-50">
          Practice practical, coach-style responses to common POS/SaaS objections. Pick a scenario, submit your response, review coaching, and retry until it feels natural in real conversations.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/practice" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">
            Start Practice
          </Link>
          <Link href="/trainer" className="rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
            Open Trainer Mode
          </Link>
        </div>
      </section>

      <SearchAndFilter
        query={query}
        selectedCategory={selectedCategory}
        categories={scenarioCategories}
        onQueryChange={setQuery}
        onCategoryChange={setSelectedCategory}
      />

      {filteredScenarios.length === 0 ? (
        <section className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <h2 className="text-lg font-semibold text-slate-800">No scenarios found</h2>
          <p className="mt-2 text-sm text-slate-600">Try a different keyword or clear your category filter.</p>
        </section>
      ) : (
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredScenarios.map((scenario) => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))}
        </section>
      )}
    </main>
  );
}
