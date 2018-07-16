// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

const LinkedList = require('./linkedlist').LinkedList;

function midpoint(list) {
    if(list.head){
        let t1 = list.getFirst();
        let t2 = list.getFirst();
        
        while(t2 && t2.next){
            t2 = t2.next;
            t2 = t2.next;
            if(t2){
                t1 = t1.next;
            }
           
        }

        return t1;
    }
    return null;
}

module.exports = midpoint;
