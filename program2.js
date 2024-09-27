const decodeTheRing = function (s, p) {

    // write your code herefunction isMatch(message, pattern) {
    const m = message.length;
    const p = pattern.length;

    // Create a DP table with (m+1) x (p+1) size
    const dp = Array.from({ length: m + 1 }, () => Array(p + 1).fill(false));

    // Base case: Empty message and empty pattern match
    dp[0][0] = true;

    // Fill the first row where pattern can match an empty message (only '*' can do that)
    for (let j = 1; j <= p; j++) {
        if (pattern[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= p; j++) {
            if (pattern[j - 1] === '*') {
                // '*' can match zero or more characters
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            } else if (pattern[j - 1] === '?' || pattern[j - 1] === message[i - 1]) {
                // '?' or exact character match
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    // The final result is whether the entire message matches the entire pattern
    return dp[m][p];
}

// Example usage:

console.log(isMatch("aa", "a"));    // false
console.log(isMatch("aa", "*"));    // true
console.log(isMatch("cb", "?a"));   // false
console.log(isMatch("abc", "a*c")); // true


  };
  
  module.exports = decodeTheRing;