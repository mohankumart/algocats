// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let tempSize = size;
//     let resultArray = [];
//     let temArray = [];

//     for(let i=0; i<=array.length; i++){
//         if(tempSize == 0 || i == array.length){
//             resultArray.push(temArray.slice());
//             tempSize = size;
//             temArray.length = 0;
//         }
//         if(i != array.length){
//             temArray.push(array[i]);
//             tempSize--;
//         }
//     }
//     return resultArray;
// }

// function chunk(array, size){
//     let resultArray = [];
//     for(let char of array){
//         let lastEle = resultArray[resultArray.length - 1];
//         if(lastEle){
//             if(lastEle.length < size){
//                 lastEle.push(char);
//             }else{
//                 resultArray.push([char]);
//             }
//         }else{
//             resultArray.push([char]);
//         }
//     }
//     return resultArray;
// }

function chunk(array, size){
    let resultArray = [];
    let index = 0;
    while(index < array.length){
        resultArray.push(array.slice(index, index+size));
        index += size;
    }
    return resultArray;
}

console.log(chunk([1,2,3], 2));
module.exports = chunk;
