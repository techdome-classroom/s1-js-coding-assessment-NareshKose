const getTotalIsles = function (grid) {


  // write your code here
    if ( grid.length === 0 || !grid ){
      
       return 0;

    }

    const rows = grid.length;

    const columns = grid[0].length;

    const searchRecursion = (i, j) => {

        if (i < 0 || i >= rows || j < 0 || j >= columns || grid[i][j] === 'W') {

            return ;
        }

        
        grid[i][j] = 'W';

        
        searchRecursion(i - 1, j);  
        searchRecursion(i + 1, j);  
        searchRecursion(i, j - 1);  
        searchRecursion(i, j + 1);  

    };

    let numofTotalIslands = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {


            if (grid[i][j] === 'L') {

              numofTotalIslands++;  

              searchRecursion(i, j);     

            }
        }
    }

 return numofTotalIslands;


};

module.exports = getTotalIsles;