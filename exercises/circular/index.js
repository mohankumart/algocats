// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

const linkedList = require('./linkedlist').LinkedList;
const Node = require('./linkedlist').Node;

function circular(list) {
    let t1 = list.getFirst();
    let t2 = list.getFirst();
debugger;
    while(t2.next && t2.next.next){
        t2 = t2.next.next;
        t1 = t1.next;

        if(t1 == t2){
            return true;
        }
    }

    return false;

}

  const l = new linkedList();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  l.head = a;
  a.next = b;
  b.next = c;
  c.next = null;
  console.log(circular(l)) // true


module.exports = circular;
