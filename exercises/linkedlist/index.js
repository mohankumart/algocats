// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        //initialize the head
        this.head = null;
    }

    insertFirst(data){
        const node = new Node(data, this.head);
        this.head = node;
    }

    size(){
        let temp = this.head;
        let size = 0;
        while(temp){
            size++;
            temp = temp.next;
        }
        return size;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
            return null;
        }

        let temp = this.head;
        while(temp.next){
            temp = temp.next;
        }
        return temp;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(this.head){
            this.head = this.head.next;
        }
    }

    removeLast() {
        if(!this.head){
            return;
        }

        if(!this.head.next){
            this.head = null;
            return;
        }

        let temp1 = this.head;
        let temp2 = this.head.next;

        while(temp2.next){
            temp2 = temp2.next;
            temp1 = temp1.next;
        }

        temp1.next = null;
    }

    insertLast(data) {
        let temp = this.getLast();
        const node = new Node(data);
        if(temp){
            temp.next = node;
        }else{
            this.head = node;
        }
        
    }

    getAt(index){
        let temp = this.head;
        let count = 0;
        while(temp){
            if(index == count){
                return temp;
            }
            temp = temp.next;
            count++;
        }
        return null;
    }

    removeAt(index){

        //Hanlde out of bounds issues.
        if(index > this.size()-1){
            return;
        }

        //Hanlde out no list issues.
        if(!this.head){
            return;
        }

        //Handle only one node issues.
        if(!this.head.next && index == 0){
            this.head = null;
        }

        //Hanlde remove first node issues.
        if(this.head.next && index == 0){
            this.head = this.head.next;
            return;
        }


        //Hanlde other all issues.
        let count = 1, temp1 = this.head, temp2 = this.head.next;

        while(count != index){
            temp1 = temp1.next;
            temp2 = temp2.next;
            count++;
        }

        if(count == index){
            temp1.next = temp2.next;
        }
    }


    insertAt(data, index){

        //Hanlde empty list case
        if(index == 0 && !this.head){
            const node = new Node(data);
            this.head = node;
            return;
        }

        //Handle insertfirst with list exists case
        if(index == 0 && this.head){
            const node = new Node(data);
            node.next = this.head;
            this.head = node;
            return;
        }

        //out of bounds case
        if(index > this.size() || index == this.size()){
            this.insertLast(data);
            return;
        }

        //insert at index case
        let count = 1, temp1 = this.head, temp2 = this.head.next;
        while(count != index){
            temp1 = temp1.next;
            temp2 = temp2.next;
            count++;
        }

        if(count == index){
            const node = new Node(data);
            node.next = temp2;
            temp1.next = node;
            return;
        }

    }

    forEach(fn){
        let temp = this.head;
        while(temp){
            fn.call(null, temp);
            temp = temp.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
