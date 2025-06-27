

const longestSubstring = (s) => {
  let substring = [];
  let countSub = 0;
  let recordSub = 0;
  const inputSplit = s.split("");
  for (let i = 0; i < inputSplit.length; i++) {
    if (substring.includes(inputSplit[i])) {
      if (recordSub < countSub) {
        recordSub = countSub;
      }
      countSub = 0;
      substring = []
    }
    substring.push(inputSplit[i]);
    countSub++
  }
  return recordSub
}

longestSubstring("dvdf");

/*

The goal for longest subscring without repeating characters is 
to get the longest substring... "pwwkew"

The answer for the example would be "wke"

The answer is looking for what's the longest substring without
any repeating characters

How to solve this is to

loop through the string by splitting
push each letter to the array
if a letter is already exists and no count yet - count letter, set stash, empty array
keeping looking until the end of array
repeat
if count is less than new array and letter exist in array - count letter, set stash, empty array
if none found return

*/