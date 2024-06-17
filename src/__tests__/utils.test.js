import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome word", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("handles uppercase and lowercase input", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error if input has any non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar123")).toThrow("Input must contain only alphabetic characters");
  });

  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
  });
});
