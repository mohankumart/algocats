// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     var length = str.length;
//     var reverseString = '';
//     for(var i=length-1; i>=0; i--){
//         reverseString += str.charAt(i);
//     }
//     return reverseString;
// }

// function reverse(str){
//     let reversed = '';

//     for(let character of str){
//         reversed = character + reversed;
//     }

//     return reversed;

// }

function reverse(str){
    return str.split('').reduce((initialValue, currentValue) => currentValue + initialValue,'');
}

function sum(arr){
    return arr.reduce((accumulate, arrayValue) => accumulate+arrayValue);
}

function sumOfValuesInObject(objArr){
    let initialValue = 0;
    return objArr.reduce((accumulate, currentObject) => accumulate + currentObject.x, initialValue);
}

function flattenArray(arrArr){
    return arrArr.reduce((accumulate, currentItem) => accumulate.concat(currentItem));
}

function countInstances(arr){
    return arr.reduce((accumulate, currentValue) => {
        if(currentValue in accumulate){
            accumulate[currentValue]++;
        }else{
            accumulate[currentValue] = 1;
        }
        return accumulate;
    },{});
}

function groupByProperty(arrObject, property){
    return arrObject.reduce((accumulate, currentObject)=>{
        if(currentObject[property] in accumulate){
            accumulate[currentObject[property]].push(currentObject);
        }else{
            accumulate[currentObject[property]] = [currentObject];
        }
        return accumulate;
    },{});
}

console.log(groupByProperty([{name:'mohan',age:20},{name:'kumar',age:20},{name:'mohan',age:33}], 'age'));

module.exports = {reverse, sum, sumOfValuesInObject, flattenArray, countInstances};
