import { lengthOfTime } from "./length-of-time"

describe("Length of Time util", () => {
  it("Correctly handles duration calculation", () => {
    const tests = [
      { test: { start: "11 18", end: "11 19" }, result: "1 year" },
      { test: { start: "11 10", end: "11 19" }, result: "9 years" },
      { test: { start: "11 10", end: "12 19" }, result: "9 years 1 month" },
      { test: { start: "11 10", end: "1 20" }, result: "9 years 2 months" },
      { test: { start: "11 10", end: "12 10" }, result: "1 month" },
      { test: { start: "12 10", end: "1 11" }, result: "1 month" },
      { test: { start: "11 10", end: "1 11" }, result: "2 months" },
      { test: { start: "1 10", end: "1 10" }, result: "0 month" }, // edge case
    ]

    tests.forEach(({ test, result }) => expect(lengthOfTime(test)).toBe(result))
  })
})
