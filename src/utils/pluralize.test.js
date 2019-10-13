import { pluralize } from "./pluralize"

describe("Pluralize util", () => {
  it("Correctly handles pluralization", () => {
    const tests = [
      { test: ["year", 0], result: "year" },
      { test: ["month", -12313], result: "month" },
      { test: ["year", 2], result: "years" },
      { test: ["month", 21839], result: "months" },
    ]

    tests.forEach(({ test, result }) => expect(pluralize(...test)).toBe(result))
  })
})
