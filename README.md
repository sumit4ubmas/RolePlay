# Objection Handling Role-Play Trainer

A mobile-responsive MVP training app for sales objection-handling practice in POS/SaaS field sales.

## What this MVP includes

- **Scenario library** with 6 seeded objection scenarios
- **Home page** with search + category filtering
- **Scenario detail pages** with objection context and recommended approach
- **Practice mode** with:
  - Response text area
  - Rule-based evaluation rubric (5 categories, 1–5 each)
  - Total score, strengths, missed opportunities, and coaching tips
  - Ideal response reveal
  - Retry flow and next scenario flow
  - Progress indicator
  - Role-play randomizer button
- **Trainer mode** with:
  - Session instructions
  - Printable scorecard template
  - Scenario coaching notes
- **Local storage progress** persistence for completed scenarios
- **Basic tests** for scoring logic

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Local in-code scenario data
- Vitest for unit tests

## Getting started locally

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3) Run checks

```bash
npm run lint
npm run test
npm run build
```

## Project structure

```text
.
├─ src/
│  ├─ app/
│  │  ├─ page.tsx                # Home page
│  │  ├─ practice/page.tsx       # Role-play practice workflow
│  │  ├─ scenario/[id]/page.tsx  # Scenario detail page
│  │  ├─ trainer/page.tsx        # Manager/trainer mode
│  │  ├─ layout.tsx              # Shared layout/nav
│  │  └─ not-found.tsx
│  ├─ components/
│  │  ├─ EvaluationPanel.tsx
│  │  ├─ IdealResponseCard.tsx
│  │  ├─ ProgressBar.tsx
│  │  ├─ ScenarioCard.tsx
│  │  ├─ ScenarioMeta.tsx
│  │  └─ SearchAndFilter.tsx
│  ├─ data/
│  │  └─ scenarios.ts            # Seeded scenarios + helpers
│  ├─ hooks/
│  │  └─ useProgress.ts          # localStorage progress state
│  ├─ lib/
│  │  ├─ scoring.ts              # Rule-based evaluation engine
│  │  └─ scoring.test.ts
│  └─ types/
│     └─ scenario.ts             # Shared TypeScript models
├─ tailwind.config.ts
├─ postcss.config.mjs
├─ next.config.ts
└─ vitest.config.ts
```

## How scoring works (MVP)

The evaluator checks user responses for keyword signals in five rubric categories:

1. Empathy / acknowledgment
2. Clarifying questions
3. Value-based response
4. Confidence / professionalism
5. Next-step close

Each category is scored from **1 to 5** using simple keyword match counts (+ question-mark bonus on clarifying). This keeps the MVP deterministic and easy to tune before adding any AI-based evaluation.

## Extending with new scenarios

Update `src/data/scenarios.ts` and add another object that conforms to the `Scenario` interface in `src/types/scenario.ts`.

## Notes

- No backend/auth/database is included (MVP constraint).
- Styling is intentionally minimal and professional for internal coaching use.
