let maxSubstring = "";
let currentSubstring = s[0] || "";

for (let i = 1; i < s.length; i++) {
    if (s[i] >= s[i - 1]) {
        currentSubstring += s[i];  // Extend valid substring
    } else {
        // Check if the current substring is the longest
        if (currentSubstring.length > maxSubstring.length) {
            maxSubstring = currentSubstring;
        }
        currentSubstring = s[i]; // Start a new substring
    }
}

// Final check for the last substring
if (currentSubstring.length > maxSubstring.length) {
    maxSubstring = currentSubstring;
}

return maxSubstring;




function findMaxChainLength(s) {
  console.log(s);
  const letterChain = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const chainsCollection = [];
  let cacheCollection = [];
  let previous = ''
  s.split('').forEach((letter, i) => {
      if (previous === '') {
          previous = letter;
          cacheCollection.push(previous);
      } else if (letterChain.indexOf(letter) >= letterChain.indexOf(previous)) {
          previous = letter;
          cacheCollection.push(letter);
          if (s.split('').length === i + 1) {
              chainsCollection.push([...cacheCollection]); 
          }
      } else if (letterChain.indexOf(letter) < letterChain.indexOf(previous)) {
          previous = letter;
          chainsCollection.push([...cacheCollection]);
          cacheCollection = []
          cacheCollection.push(letter);
      }
  });
  let longest = []
  for (let chain of chainsCollection) {
      if (chain.length > longest.length) {
          longest = chain;
      }
  }
  return longest.length
}