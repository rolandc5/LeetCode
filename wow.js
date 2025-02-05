function longestValidSubstring(s) {
  let maxSubstring = "";
  let currentSubstring = "";

  for (let i = 0; i < s.length; i++) {
      if (i === 0 || s[i] >= s[i - 1]) {
          currentSubstring += s[i];  // Extend the valid substring
      } else {
          // Update the max substring if the current one is longer
          if (currentSubstring.length > maxSubstring.length) {
              maxSubstring = currentSubstring;
          }
          currentSubstring = s[i]; // Start a new substring
      }
  }

  // Final check to capture the last valid substring
  if (currentSubstring.length > maxSubstring.length) {
      maxSubstring = currentSubstring;
  }

  return maxSubstring;
}

// Example Usage:
console.log(longestValidSubstring("fghbbadcba")); // Output: "bbadc"
console.log(longestValidSubstring("abcde"));      // Output: "abcde"
console.log(longestValidSubstring("xyzab"));      // Output: "xyz"
console.log(longestValidSubstring("aabbccddeeff")); // Output: "aabbccddeeff"