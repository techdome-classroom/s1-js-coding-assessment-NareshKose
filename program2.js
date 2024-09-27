const decodeTheRing = function (s, p) {

    // write your code here

      const helperFunctionRec = (i, j) => {
          
          if (j === p.length) {
              
              return i === s.length;
          }
  
          if (p[j] === '*') {
              
              return helperFunctionRec(i, j + 1) ;
          }
  
          if (i < s.length && (p[j] === '?' || p[j] === s[i])) {
             
              return helper(i + 1, j + 1);
          }
  
          
          return false;
      };
  
      
      return helper(0, 0);
  

  };
  
  module.exports = decodeTheRing;