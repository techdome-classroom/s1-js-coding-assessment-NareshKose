const decodeTheRing = function (s, p) {

    // write your code here

      const helper = (i, j) => {
          // Base cases
          if (j === p.length) {
              // If we have consumed the entire pattern, the message must also be fully consumed
              return i === message.length;
          }
  
          if (p[j] === '*') {
              // Try to match '*' with zero characters or with one or more characters
              return helper(i, j + 1) || (i < message.length && helper(i + 1, j));
          }
  
          if (i < message.length && (p[j] === '?' || p[j] === message[i])) {
              // If the current characters match or if it's a '?', move both pointers forward
              return helper(i + 1, j + 1);
          }
  
          // No match found
          return false;
      };
  
      // Start recursion with both indices at 0
      return helper(0, 0);
  }
  
  // Example usage:
  
  console.log(isMatch("aa", "a"));    // false
  console.log(isMatch("aa", "*"));    // true
  console.log(isMatch("cb", "?a"));   // false
  console.log(isMatch("abc", "a*c")); // true
  

  };
  
  module.exports = decodeTheRing;