
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
        var newTail = current;
        while(current.next) {
            newTail = current; 
            current = current.next; 
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        var current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0) this.tail = null;
        return current;
    }

    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let cur = this.head;
        let cnt = 0;
        while(cnt !== index) { 
            cur = cur.next;
            cnt++;  
        }
        return cur;
    }

    set(val, index) {
        let node = this.get(index);
        if(!node) return false;
        node.val = val;
        return true;
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
console.log(list.set(6, 1));
list.display();