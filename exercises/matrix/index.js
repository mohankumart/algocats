// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let number = 1;
    let resultArray = [];
    for(let i=0; i< n; i++){
        resultArray.push([]);
    }
    let loops = Math.ceil(n/2);
    let end = n-1;

    for(let i=0; i<loops; i++){
        loopLength = (end-i) * 4;
        

        row = i;
        col = i;

        if(loopLength == 0){
            resultArray[row][col] = number;
        }else{
            for(j=0; j<loopLength; j++){
                
                //direction left to right
                if(row == i && col < end){
                    resultArray[row][col] = number;
                    number++;
                    col++;
                    continue;
                }
                
                //direction top to bottom
                if(row < end && col == end){
                    resultArray[row][col] = number;
                    number++;
                    row++;
                    continue;
                }
    
                //direction right to left
                if(row == end && col > i){
                    resultArray[row][col] = number;
                    number++;
                    col--;
                    continue;
                }
    
                //direction bottom to top
                if(row > i && col == i){
                    resultArray[row][col] = number;
                    number++;
                    row--;
                    continue;
                }
            }
            end = end - 1;
        }
    }

    return resultArray;

}

console.log(matrix(4));
module.exports = matrix;
