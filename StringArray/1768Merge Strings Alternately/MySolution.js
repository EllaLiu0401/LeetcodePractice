/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
  const word1Length = word1.length;
  const word2Length = word2.length;
  let long;
  let short;
  let result = "";

  // Compare length
  if (word1Length >= word2Length) {
    long = word1;
    short = word2;
  } else {
    long = word2;
    short = word1;
  }

  // Get diff value
  const diffValue = long.slice(short.length);

  // Merge string
  for (let i = 0; i < short.length; i++) {
    result += word1[i] + word2[i];
  }
  result += diffValue;
  return result;
};

mergeAlternately("ab", "pqrs");
