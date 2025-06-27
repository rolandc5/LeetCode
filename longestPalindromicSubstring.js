var longestPalindrome = function(s) {
    const oPalindrome = [];
    const tPalindrom = []
    const input = s.split("");
    if ([...input].reverse().join("") === s) {
        return s;
    }
    let lPalindrome = "";
    for (let i = 0; i < input.length; i++) {
        oPalindrome.push(input[i]);
        for (let y = i; y < input.length; y++) {
            tPlindrome.push(input[i]);
            if (oPalindrome.join("") === [...palindrome].reverse().join("")) {
                if (oPpalindrome.length > 1) lPalindrome = palindrome.join("");
            }
        }
    }
    return lPalindrome
};

// What is a palindrome? Is a word, sentence, verse or number that is the same forwards or backwards
// Spit string into array
// How to check for palindrome, reverse current array and check if it's the same
// If it is set/replace varliable with new value.
// Return with value joined as string.