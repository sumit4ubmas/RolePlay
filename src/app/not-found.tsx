import Link from "next/link";

export default function NotFound() {
  return (
    <main className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h1 className="text-2xl font-bold text-slate-900">Scenario not found</h1>
      <p className="mt-2 text-sm text-slate-600">The scenario you requested does not exist.</p>
      <Link href="/" className="mt-5 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
        Go back home
      </Link>
    </main>
  );
}
