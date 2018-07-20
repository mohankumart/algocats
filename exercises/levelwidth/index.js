// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    //set the temp array with root and 's' pointer
    //set the pointer in array
    const symbol = 's';
    let tempArray = [root, symbol];
    let counterArray = [];
    let counter = 0;
    
    while(tempArray.length){
        let node = tempArray.shift();
        if((node === symbol)){
            counterArray.push(counter);
            counter = 0;
            if(tempArray.length){
                tempArray.push(symbol);
            }
        }else{
            counter++;
            tempArray.push(...node.children);
        }
    }
    return counterArray;
}

const Node = require('./node');
const root = new Node(0);
  root.add(1);
  root.add(2);
  root.add(3);
  root.children[0].add(4);
  root.children[2].add(5);

console.log(levelWidth(root));
module.exports = levelWidth;
