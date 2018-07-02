// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examplesn
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     return str.split(' ').reduce((accumulate, currentEle) => {
//         accumulate.push(currentEle[0].toUpperCase() + currentEle.slice(1));
//         return accumulate;
//     },[]).join(' ');
// }

function capitalize(str) {
    let resultStr = str[0].toUpperCase();
    const strLength = str.length;
    for(let i=1; i<strLength; i++){
        if(str[i-1] == ' '){
            resultStr += str[i].toUpperCase();
        }else{
            resultStr += str[i];
        }
    }
    return resultStr;
}
module.exports = capitalize;
