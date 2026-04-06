export type Difficulty = "Easy" | "Medium" | "Hard";

export type ScoreCategory =
  | "Empathy / acknowledgment"
  | "Clarifying questions"
  | "Value-based response"
  | "Confidence / professionalism"
  | "Next-step close";

export type CategoryTag = "Price" | "Timing" | "Competition" | "Authority" | "Brush-off";

export interface ScoringCriteria {
  empathy: string[];
  clarifying: string[];
  value: string[];
  confidence: string[];
  nextStep: string[];
}

export interface Scenario {
  id: string;
  title: string;
  category: CategoryTag;
  objection: string;
  background: string;
  objective: string;
  difficulty: Difficulty;
  recommendedApproach: string;
  idealResponse: string;
  whyItWorks: string;
  coachingTips: string[];
  followUpQuestion: string;
  commonMistakes: string[];
  scoringKeywords: ScoringCriteria;
}

export interface CategoryScore {
  name: ScoreCategory;
  score: number;
  matchedKeywords: string[];
}

export interface EvaluationResult {
  totalScore: number;
  breakdown: CategoryScore[];
  strengths: string[];
  missedOpportunities: string[];
  coachingSuggestions: string[];
}
