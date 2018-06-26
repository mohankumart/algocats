// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let accumulateObj = {};
    for(let char of str){
        accumulateObj[char] = accumulateObj[char] + 1 || 1;
    }

    let max = 0, maxKey;
    for(key in accumulateObj){
        if(accumulateObj[key] > max){
            max = accumulateObj[key];
            maxKey = key;
        }
    }

    return maxKey;
}

module.exports = maxChar;
