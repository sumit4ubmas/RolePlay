"use client";

import { CategoryTag } from "@/types/scenario";

interface SearchAndFilterProps {
  query: string;
  selectedCategory: CategoryTag | "All";
  categories: CategoryTag[];
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: CategoryTag | "All") => void;
}

export const SearchAndFilter = ({
  query,
  selectedCategory,
  categories,
  onQueryChange,
  onCategoryChange
}: SearchAndFilterProps) => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-4 md:grid-cols-[2fr,1fr]">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Search objection or scenario title</span>
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Try: expensive, partner, POS, busy..."
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 transition focus:ring-2"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Filter by category</span>
          <select
            value={selectedCategory}
            onChange={(event) => onCategoryChange(event.target.value as CategoryTag | "All")}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 transition focus:ring-2"
          >
            <option value="All">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
};
