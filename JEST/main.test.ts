import { describe, expect, test } from "@jest/globals";
import { sum } from "./main";

beforeAll(() => {
  console.log("Starting tests...");
});

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("adds 2 + 1 to equal 3", () => {
    expect(sum(2, 1)).toBe(3);
  });
  test("adds 10 + 20 to equal 30", () => {
    expect(sum(10, 20)).toBe(30);
  });
  test("adds 11 + 22 to equal 33", () => {
    expect(sum(11, 22)).toBe(33);
  });
});

afterAll(() => {
  console.log("Finishing tests and clearing up...");
});
