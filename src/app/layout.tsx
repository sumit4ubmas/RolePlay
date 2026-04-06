import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "Objection Handling Role-Play Trainer",
  description: "Practice objection-handling responses for field sales and POS/SaaS teams."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto min-h-screen max-w-6xl px-4 pb-12 pt-6 md:px-6">
          <header className="no-print mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <Link href="/" className="text-lg font-bold text-slate-900">
              Objection Handling Role-Play Trainer
            </Link>
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">
                Home
              </Link>
              <Link href="/practice" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">
                Practice
              </Link>
              <Link href="/trainer" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">
                Trainer Mode
              </Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
