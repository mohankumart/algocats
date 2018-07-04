// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
    
//     let colLength = (n*2) - 1;
//     let initialSpaces = colLength - 1;

//     for(let row=0; row<n;row++){
//         let stair = '';

//         //render the first half spaces
//         for(let i=0; i< initialSpaces/2; i++){
//             stair += ' '
//         }

//         //render the hases; colLength - initialspaces
//         for(let i=0; i< (colLength-initialSpaces); i++){
//             stair += '#'
//         }

//         //render the second hal spaces
//         for(let i=0; i< initialSpaces/2; i++){
//             stair += ' '
//         }
        
//         console.log(stair);
//         initialSpaces -= 2;
//     }
// }

function pyramid(n, row=0, spaces=0){
    debugger;
    if(n === row){
        return false;
    }
    pyramid(n, row+1, spaces+2);

    let level = '';
    for(let i=0; i< spaces/2; i++){
        level += ' '
    }
    for(let i=0; i< ((n*2) -1 - spaces); i++){
        level += '#'
    }
    for(let i=0; i< spaces/2; i++){
        level += ' '
    }
    console.log(level);
    return false;
}

pyramid(3);
module.exports = pyramid;
