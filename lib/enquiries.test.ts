import { beforeEach, describe, expect, it, vi } from "vitest";

const createIndex = vi.fn().mockResolvedValue("index");
const updateOne = vi.fn();
const collection = vi.fn(() => ({ createIndex, updateOne }));

vi.mock("@/lib/mongodb", () => ({
  getDatabase: vi.fn(async () => ({ collection })),
}));

describe("canSubmitEnquiry", () => {
  beforeEach(() => {
    updateOne.mockReset();
  });

  it("allows the first ten requests and rejects the eleventh", async () => {
    updateOne.mockResolvedValueOnce({ upsertedCount: 1, matchedCount: 0 });
    for (let request = 1; request < 10; request += 1) {
      updateOne.mockResolvedValueOnce({ upsertedCount: 0, matchedCount: 1 });
    }
    updateOne.mockResolvedValueOnce({ upsertedCount: 0, matchedCount: 0 });

    const { canSubmitEnquiry } = await import("./enquiries");
    const results = await Promise.all(Array.from({ length: 11 }, () => canSubmitEnquiry("203.0.113.1")));

    expect(results).toEqual([...Array(10).fill(true), false]);
  });
});
