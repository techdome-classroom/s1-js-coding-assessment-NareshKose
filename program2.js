const decodeTheRing = function (s, p) {

    // write your code here

      const helper = (i, j) => {
          
          if (j === p.length) {
              
              return i === s.length;
          }
  
          if (p[j] === '*') {
              // Try to match '*' with zero characters or with one or more characters
              return helper(i, j + 1) || (i < s.length && helper(i + 1, j));
          }
  
          if (i < s.length && (p[j] === '?' || p[j] === s[i])) {
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