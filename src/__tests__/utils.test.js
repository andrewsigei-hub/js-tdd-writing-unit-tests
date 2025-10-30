// src/__tests__/utils.test.js

import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  // Test case 1: A simple lowercase word
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    // Arrange: Define the input and expected output
    const word = "test";
    const expectedPoints = 7;

    // Act: Call the function
    const actualPoints = pointsForWord(word);

    // Assert: Check if the result is correct
    expect(actualPoints).toBe(expectedPoints);
  });

  // Test case 2: A word with mixed casing
  it("handles uppercase and lowercase input", () => {
    // Arrange
    const word = "tEsT";
    const expectedPoints = 7;

    // Act
    const actualPoints = pointsForWord(word);

    // Assert
    expect(actualPoints).toBe(expectedPoints);
  });
});