// src/utils.js

/**
 * Calculates a score for a word. Vowels are worth 1 point, consonants are 2.
 * @param {string} word The word to score.
 * @returns {number} The calculated score.
 */
export function pointsForWord(word) {
  let points = 0;
  // Loop through each character of the input word
  for (const char of word) {
    // Use a case-insensitive regex (/i) to check if the character is a vowel
    points += /[aeiou]/i.test(char) ? 1 : 2;
  }
  return points;
}