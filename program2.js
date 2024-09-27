const decodeTheRing = function (s, p) {

    // write your code here

      const helper = (i, j) => {
          
          if (j === p.length) {
              
              return i === s.length;
          }
  
          if (p[j] === '*') {
              
              return helper(i, j + 1) || (i < s.length && helper(i + 1, j));
          }
  
          if (i < s.length && (p[j] === '?' || p[j] === s[i])) {
             
              return helper(i + 1, j + 1);
          }
  
          
          return false;
      };
  
      
      return helper(0, 0);

  
  // Example usage:
  
  console.log(isMatch("aa", "a"));    // false
  console.log(isMatch("aa", "*"));    // true
  console.log(isMatch("cb", "?a"));   // false
  console.log(isMatch("abc", "a*c")); // true
  

  };
  
  module.exports = decodeTheRing;