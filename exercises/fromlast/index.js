// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let t1 = list.head;
    let t2 = list.head;

    
    //move the t2 to nth position
    for(let i=0; i<n; i++){
        t2 = t2.next;
    }

    //move the t1 an t2 by one to reach and return t1
    while(t2.next){
        t2 = t2.next;
        t1 = t1.next;
    }

    return t1;

}

module.exports = fromLast;
