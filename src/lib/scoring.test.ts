import { describe, expect, it } from "vitest";

import { scenarios } from "@/data/scenarios";
import { evaluateResponse } from "@/lib/scoring";

describe("evaluateResponse", () => {
  const scenario = scenarios[0];

  it("returns baseline low scores for an empty response", () => {
    const result = evaluateResponse("   ", scenario);

    expect(result.totalScore).toBe(5);
    expect(result.missedOpportunities).toContain("No response entered yet.");
  });

  it("rewards responses that include empathy, value, and next steps", () => {
    const response =
      "That is fair and I understand cost matters. Can I ask what you pay today? If we improve reporting and profit, would it make sense to schedule a quick call tomorrow?";
    const result = evaluateResponse(response, scenario);

    expect(result.totalScore).toBeGreaterThan(15);
    const nextStep = result.breakdown.find((item) => item.name === "Next-step close");
    expect(nextStep?.score).toBeGreaterThanOrEqual(3);
  });
});
