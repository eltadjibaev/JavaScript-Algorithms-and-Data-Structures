
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined; 
        var current = this.head;
        var oldTail = this.tail;
        while(current.next !== oldTail) { current = current.next; }
        this.tail = current;
        current.next = null;
        this.length--;
        return oldTail;
    }

    display() {
        var cur = this.head;
        while(cur) {
            console.log(cur.val);
            cur = cur.next;
        }
    }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.display();
var test = list.pop();
list.display();
console.log(`test ==> ${test.val}`);