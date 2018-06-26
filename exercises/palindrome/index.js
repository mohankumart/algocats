// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution 1
// function palindrome(str) {
//     let start = 0;
//     let end = str.length - 1;
//     let isPalindrome = true;
//     const regex = new RegExp('^[0-9a-zA-Z]');

//     while((start!= end && (end-start) != 1) && end > start){
        
//         while(!str[start].match(regex)){
//             start++;
//         }
//         while(!str[end].match(regex)){
//             end--;
//         }

//         //if str[end] is equal to any special character ignore
//         if(str[start].toLowerCase() != str[end].toLowerCase()){
//             isPalindrome = false;
//             return isPalindrome;
//         }

//         end--;
//         start++;
//     }
//     return isPalindrome;
// }

// function palindrome(str){
//     let reversed = '';
//     for(let c of str){
//         reversed = c + reversed;
//     }
//     return str === reversed;
// }

function palindrome(str){
    return str.split('').every((element, index, currentArray) => {
        return element == currentArray[currentArray.length - index -1];
    });
}

console.log(palindrome('taaaat'));
module.exports = palindrome;
