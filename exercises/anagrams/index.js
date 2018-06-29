// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     const stringMapA = generateMap(stringA);
//     const stringMapB = generateMap(stringB);
    
//     if(Object.keys(stringMapA).length != Object.keys(stringMapB).length){
//         return false;
//     }

//     for(key in stringMapA){
//         if(stringMapA[key] != stringMapB[key]){
//             return false;
//         }
//     }
    
//     return true;
// }

// function generateMap(str){
//     const strMap = {};
//     for(char of str.replace(/[^a-zA-Z0-9]/g, str)){
//         strMap[char] = strMap[char] + 1 || 1;
//     }
//     return strMap;
// }

// function anagrams(stringA, stringB){
//     let parsedStringA = stringA.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     let parsedStringB = stringB.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//     for(let char of parsedStringA){
//         parsedStringB = parsedStringB.replace(char, "");
//     }

//     if(parsedStringB.length == 0){
//         return true;
//     }else{
//         return false;caches
//     }
// }

function anagrams(stringA, stringB){

}

anagrams('hello', 'llohe');

module.exports = anagrams;
