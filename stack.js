class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if(!this.first) this.first = this.last = newNode;
        else {
            let temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) this.first = this.last = null;
        else this.first = temp.next;
        this.size--;
        return temp.value;
    }
}

var stack = new Stack();
stack.push(23);
stack.push(22);
stack.push(21);
console.log(stack);
console.log(stack.pop());
console.log(stack);