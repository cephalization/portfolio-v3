import { lengthOfTime } from "./length-of-time"

describe("Length of Time util", () => {
  it("Correctly handles duration calculation", () => {
    const tests = []

    tests.forEach(({ test, result }) => expect(test()).toBe(result))
  })
})
