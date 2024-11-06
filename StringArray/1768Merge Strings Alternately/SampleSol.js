/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let mergerd = "";
  let length1 = word1.length;
  let length2 = word2.length;

  // Get max length
  let maxLength = Math.max(length1, length2);

  // Get result
  for (let i = 0; i < maxLength; i++) {
    if (i < length1) {
      mergerd = mergerd + word1[i];
    }
    if (i < length2) {
      mergerd = mergerd + word2[i];
    }
  }

  return mergerd;
};

//Tips:
// 1. Use Math.max to get the longer string
// 2. Use if to compare and add one by one
