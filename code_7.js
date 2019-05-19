
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

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let node = prevNode.next;
        prevNode.next = newNode;
        newNode.next = node;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        let prevNode = this.get(index - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        if(!this.head) return false;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null, next;
        while(node) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        
        return this;
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
list.push(4);
list.push(5);
console.log(list.reverse());
list.display();