// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.tempStack = new Stack();
        this.dataStack = new Stack();
    }

    add(value) {
        this.dataStack.push(value);
    }

    remove() {
        while(this.dataStack.peek()){
            this.tempStack.push(this.dataStack.pop());
        }
        let removedEle = this.tempStack.pop();

        while(this.tempStack.peek()){
            this.dataStack.push(this.tempStack.pop());
        }
        return removedEle;
    }

    peek() {
        while(this.dataStack.peek()){
            this.tempStack.push(this.dataStack.pop());
        }
        let peekValue = this.tempStack.peek();
        while(this.tempStack.peek()){
            this.dataStack.push(this.tempStack.pop());
        }
        return peekValue;
    }
}

module.exports = Queue;
