import { Scenario } from "@/types/scenario";

export const scenarios: Scenario[] = [
  {
    id: "too-expensive",
    title: "It’s too expensive",
    category: "Price",
    objection: "Honestly, this looks good, but it’s way more expensive than what I’m paying right now.",
    background: "Restaurant owner currently uses a cheaper POS and is focused on cost.",
    objective:
      "Teach rep to acknowledge the concern, ask clarifying questions, and reframe toward business value.",
    difficulty: "Medium",
    recommendedApproach: "Acknowledge cost, ask discovery questions, then reframe from fee to ROI.",
    idealResponse:
      "That’s completely fair. Cost matters. Can I ask what you’re paying today and what matters most when you evaluate value? Many businesses initially focused on price alone, but later found that reducing errors, improving speed, and getting better reporting had a bigger impact on profit than the monthly fee itself. If we could show a clear return, would it be worth exploring further?",
    whyItWorks:
      "It validates the concern, uncovers decision criteria, and shifts the conversation to outcomes and next steps.",
    coachingTips: [
      "Use calm, neutral language when discussing money.",
      "Ask one clarifying question before pitching value.",
      "Tie benefits to speed, errors, and reporting impact."
    ],
    followUpQuestion: "If we found one area where your current setup is costing you weekly, would you want to see it?",
    commonMistakes: [
      "Defending price too early",
      "Talking too much",
      "Discounting immediately",
      "Not asking a clarifying question"
    ],
    scoringKeywords: {
      empathy: ["fair", "understand", "totally", "makes sense", "cost matters"],
      clarifying: ["what", "how", "which", "can i ask", "help me understand"],
      value: ["value", "roi", "profit", "reporting", "speed", "errors"],
      confidence: ["absolutely", "happy to", "we can", "typically", "usually"],
      nextStep: ["next step", "explore", "schedule", "would it make sense", "quick call"]
    }
  },
  {
    id: "not-interested",
    title: "Not interested right now",
    category: "Timing",
    objection: "Not interested right now. We’re good.",
    background: "Prospect is busy and dismissive.",
    objective: "Teach rep to stay calm, remain curious, and reopen the conversation with insight.",
    difficulty: "Medium",
    recommendedApproach: "Acknowledge quickly, ask current-state question, and test for hidden pain.",
    idealResponse:
      "Understood. Sounds like things are working okay for now. Just so I don’t make assumptions, what system are you using today? A lot of businesses we meet felt the same until reporting, integrations, or support became a problem. Has anything like that come up for you?",
    whyItWorks: "It avoids pressure while opening curiosity around potential blind spots.",
    coachingTips: [
      "Do not debate the objection.",
      "Ask one low-friction question.",
      "Keep tone respectful and brief."
    ],
    followUpQuestion: "Would it be helpful to compare what top teams monitor weekly so you can benchmark quickly?",
    commonMistakes: [
      "Ending call too quickly",
      "Pushing too hard",
      "Ignoring the real reason behind the brush-off"
    ],
    scoringKeywords: {
      empathy: ["understood", "totally", "i hear you", "makes sense", "no problem"],
      clarifying: ["what system", "how are you", "what are you", "has anything", "can i ask"],
      value: ["reporting", "integration", "support", "benchmark", "improve"],
      confidence: ["quick", "brief", "happy to", "straightforward", "fair point"],
      nextStep: ["follow up", "later", "tomorrow", "quick overview", "next step"]
    }
  },
  {
    id: "already-have-pos",
    title: "We already use another POS",
    category: "Competition",
    objection: "We already have a POS system. We’re good.",
    background: "Prospect already uses a competitor.",
    objective: "Teach rep to avoid attacking competitors and instead uncover gaps.",
    difficulty: "Hard",
    recommendedApproach: "Respect current tool, explore what works and what could improve.",
    idealResponse:
      "That makes sense. Most businesses we talk to already have something in place. What do you like most about your current system? And if you could improve one thing, what would it be? That helps me understand whether it’s even worth comparing.",
    whyItWorks: "It avoids defensiveness and invites honest comparison criteria.",
    coachingTips: [
      "Never criticize the existing vendor.",
      "Use a two-question discovery pattern.",
      "Only position your product after a gap appears."
    ],
    followUpQuestion: "If we identified one workflow your team could make faster, would you test it?",
    commonMistakes: ["Criticizing the competitor", "Pitching before discovery", "Assuming dissatisfaction"],
    scoringKeywords: {
      empathy: ["makes sense", "totally", "understand", "fair", "already have"],
      clarifying: ["what do you like", "improve", "which", "help me understand", "if you could"],
      value: ["faster", "workflow", "efficiency", "support", "compare"],
      confidence: ["most businesses", "worth comparing", "absolutely", "usually", "clear"],
      nextStep: ["test", "compare", "next", "schedule", "review"]
    }
  },
  {
    id: "talk-to-partner",
    title: "I need to talk to my partner",
    category: "Authority",
    objection: "I need to discuss this with my partner.",
    background: "Decision is shared with another stakeholder.",
    objective: "Teach rep to understand the decision process and secure a next step.",
    difficulty: "Medium",
    recommendedApproach: "Acknowledge buying process, map decision criteria, and lock in a concrete follow-up.",
    idealResponse:
      "Absolutely, that makes sense. How do the two of you usually evaluate decisions like this? If helpful, I can also give you a short summary or join a call with both of you so you can evaluate it together. What would be the best next step?",
    whyItWorks: "It respects shared authority while preventing a stalled deal.",
    coachingTips: [
      "Ask about process, not permission.",
      "Offer a concise recap for the other stakeholder.",
      "Always secure a date or action."
    ],
    followUpQuestion: "Would Tuesday afternoon work to review this with both decision-makers together?",
    commonMistakes: [
      "Accepting a stall without next step",
      "Not asking about process",
      "Failing to include other stakeholder"
    ],
    scoringKeywords: {
      empathy: ["absolutely", "makes sense", "understand", "of course", "fair"],
      clarifying: ["how do", "who else", "what process", "evaluate", "what matters"],
      value: ["summary", "together", "decision", "alignment", "evaluate"],
      confidence: ["happy to", "we can", "best", "clear", "support"],
      nextStep: ["next step", "calendar", "tuesday", "join a call", "schedule"]
    }
  },
  {
    id: "send-info",
    title: "Send me some information",
    category: "Brush-off",
    objection: "Just send me some information.",
    background: "Prospect may be trying to exit the conversation.",
    objective: "Teach rep to qualify before sending materials.",
    difficulty: "Easy",
    recommendedApproach: "Agree to send info, then tailor via one qualifying question and offer a short walkthrough.",
    idealResponse:
      "Happy to do that. To make sure I send something useful instead of generic material, what’s the main thing you’d want to evaluate first? In many cases, a quick walkthrough is actually more helpful than a PDF. Would a short 5-minute overview be easier?",
    whyItWorks: "It keeps momentum while making the follow-up relevant.",
    coachingTips: [
      "Avoid blindly sending a brochure.",
      "Qualify intent with one question.",
      "Offer a short next interaction."
    ],
    followUpQuestion: "Would you prefer I send examples by email or cover it in a quick 5-minute call?",
    commonMistakes: [
      "Sending generic content with no qualification",
      "Losing momentum",
      "Not booking a next step"
    ],
    scoringKeywords: {
      empathy: ["happy to", "absolutely", "of course", "makes sense", "no problem"],
      clarifying: ["what's the main", "evaluate first", "which area", "can i ask", "helpful"],
      value: ["useful", "walkthrough", "relevant", "outcome", "helpful"],
      confidence: ["quick", "short", "easy", "simple", "happy"],
      nextStep: ["5-minute", "overview", "call", "send by", "next"]
    }
  },
  {
    id: "too-busy",
    title: "We’re too busy right now",
    category: "Timing",
    objection: "We’re slammed right now. Not a good time.",
    background: "Prospect is in an active business environment.",
    objective: "Teach rep to respect time while preserving momentum.",
    difficulty: "Easy",
    recommendedApproach: "Acknowledge pressure, connect relevance briefly, then offer two scheduling options.",
    idealResponse:
      "Totally understand. I can see you’re busy. The reason I stopped by is that this often helps teams during busy periods by making operations smoother. I don’t want to interrupt you now, so what’s better — later today or tomorrow morning for a quick conversation?",
    whyItWorks: "It shows empathy and gives a low-friction path to continue later.",
    coachingTips: [
      "Mirror urgency respectfully.",
      "Keep value statement under one sentence.",
      "Offer two concrete time options."
    ],
    followUpQuestion: "Would 4:30 PM today or 9:15 AM tomorrow be better for a quick chat?",
    commonMistakes: [
      "Continuing to pitch in the moment",
      "Leaving without scheduling",
      "Sounding insensitive to timing"
    ],
    scoringKeywords: {
      empathy: ["totally understand", "i can see", "busy", "no problem", "respect"],
      clarifying: ["what's better", "later today", "tomorrow", "when works", "can i ask"],
      value: ["smoother", "operations", "busy periods", "efficiency", "helps teams"],
      confidence: ["quick", "brief", "clear", "happy to", "straight"],
      nextStep: ["later today", "tomorrow", "quick conversation", "schedule", "time"]
    }
  }
];

export const scenarioCategories = Array.from(new Set(scenarios.map((scenario) => scenario.category)));

export const getScenarioById = (id: string) => scenarios.find((scenario) => scenario.id === id);
