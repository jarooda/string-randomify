import { expect, test } from "vitest"
import { randomize } from "../src/index.ts"

test("should generate a random string", () => {
  expect(randomize(1).length).toBeGreaterThan(0)
})

test("should throw error if length is less than 1", () => {
  expect(() => randomize(-34)).toThrow("Length should be more than 0")
})

test("should throw error if length is more than 10000", () => {
  expect(() => randomize(10001)).toThrow("Length should be less than 10000")
})

test("should generate a random string with the given length", () => {
  expect(randomize(10).length).toBe(10)
})

test("should return based on dictionary", () => {
  expect(randomize(4, { dictionary: "$$" })).toBe("$$$$")
})

test("should have prefix", () => {
  expect(randomize(5, { prefix: "Kr" })).toMatch(/^Kr/)
})

test("should have suffix", () => {
  expect(randomize(5, { suffix: "sF" })).toMatch(/sF$/)
})

test("should have prefix and suffix", () => {
  expect(randomize(5, { prefix: "Kr", suffix: "sF" })).toMatch(/^Kr.*sF$/)
})

test("prefix and suffix should not more than length", () => {
  expect(() => randomize(5, { prefix: "Kr", suffix: "sF44" })).toThrow(
    "Prefix and suffix should not more than length"
  )
})
