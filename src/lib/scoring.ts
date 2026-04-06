import { EvaluationResult, Scenario } from "@/types/scenario";

const scoreFromKeywordMatches = (count: number): number => {
  if (count >= 3) return 5;
  if (count === 2) return 4;
  if (count === 1) return 3;
  return 1;
};

const matchKeywords = (response: string, keywords: string[]) => {
  const normalized = response.toLowerCase();
  return keywords.filter((keyword) => normalized.includes(keyword.toLowerCase()));
};

export const evaluateResponse = (response: string, scenario: Scenario): EvaluationResult => {
  const trimmed = response.trim();

  if (!trimmed) {
    return {
      totalScore: 5,
      breakdown: [
        { name: "Empathy / acknowledgment", score: 1, matchedKeywords: [] },
        { name: "Clarifying questions", score: 1, matchedKeywords: [] },
        { name: "Value-based response", score: 1, matchedKeywords: [] },
        { name: "Confidence / professionalism", score: 1, matchedKeywords: [] },
        { name: "Next-step close", score: 1, matchedKeywords: [] }
      ],
      strengths: [],
      missedOpportunities: ["No response entered yet."],
      coachingSuggestions: ["Write a response that acknowledges the objection and asks a question."]
    };
  }

  const empathyMatches = matchKeywords(trimmed, scenario.scoringKeywords.empathy);
  const clarifyingMatches = matchKeywords(trimmed, scenario.scoringKeywords.clarifying);
  const valueMatches = matchKeywords(trimmed, scenario.scoringKeywords.value);
  const confidenceMatches = matchKeywords(trimmed, scenario.scoringKeywords.confidence);
  const nextMatches = matchKeywords(trimmed, scenario.scoringKeywords.nextStep);

  const questionBonus = trimmed.includes("?") ? 1 : 0;

  const breakdown = [
    {
      name: "Empathy / acknowledgment" as const,
      score: scoreFromKeywordMatches(empathyMatches.length),
      matchedKeywords: empathyMatches
    },
    {
      name: "Clarifying questions" as const,
      score: Math.min(5, scoreFromKeywordMatches(clarifyingMatches.length) + questionBonus),
      matchedKeywords: clarifyingMatches
    },
    {
      name: "Value-based response" as const,
      score: scoreFromKeywordMatches(valueMatches.length),
      matchedKeywords: valueMatches
    },
    {
      name: "Confidence / professionalism" as const,
      score: scoreFromKeywordMatches(confidenceMatches.length),
      matchedKeywords: confidenceMatches
    },
    {
      name: "Next-step close" as const,
      score: scoreFromKeywordMatches(nextMatches.length),
      matchedKeywords: nextMatches
    }
  ];

  const totalScore = breakdown.reduce((sum, item) => sum + item.score, 0);

  const strengths = breakdown
    .filter((item) => item.score >= 4)
    .map((item) => `${item.name}: strong coverage with ${item.matchedKeywords.length} relevant phrase(s).`);

  const missedOpportunities = breakdown
    .filter((item) => item.score <= 2)
    .map((item) => `${item.name}: add clearer language for this area.`);

  const coachingSuggestions = [
    breakdown.find((item) => item.name === "Empathy / acknowledgment")?.score ?? 0 < 3
      ? "Start by validating the prospect's concern in plain language."
      : "Good job acknowledging the objection early.",
    breakdown.find((item) => item.name === "Clarifying questions")?.score ?? 0 < 3
      ? "Ask at least one discovery question to understand context."
      : "Your clarifying question helps keep the conversation open.",
    breakdown.find((item) => item.name === "Next-step close")?.score ?? 0 < 3
      ? "Close with a specific next action and a time option."
      : "You ended with a useful forward step."
  ];

  return {
    totalScore,
    breakdown,
    strengths,
    missedOpportunities,
    coachingSuggestions
  };
};
