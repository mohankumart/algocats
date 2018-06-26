// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let revesedN = parseInt(n.toString().split('').reduce((accumulate, currEle)=>accumulate = currEle + accumulate,''));
    if(n < 0){
        return revesedN * -1;
    }
    return revesedN;
}

console.log(reverseInt(-51));
module.exports = reverseInt;
