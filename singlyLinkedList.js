class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
    push(val) {
        var newNode = new Node(val);
        if(this.head === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        if(this.head === this.tail){ 
            let current = this.head;
            this.head = this.tail = null;
            this.length = 0;
            return current; 
        }
        
        let pre = this.head;
        let temp = this.head.next;
        while (temp != this.tail) {
            pre = temp;
            temp = temp.next;
        }
        pre.next = null;
        this.tail = pre;
        
        this.length--;
        return temp;
    }
    shift() {
        if(!this.head) return undefined;
        if(this.head === this.tail) this.tail = null;
        let temp = this.head;
        this.head = temp.next;
        this.length--;
        return temp;
    }
    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) this.head = this.tail = newNode;
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) return null;
        let temp = this.head;
        for (let i = 0; i < index; i++) temp = temp.next;
        return temp;
    }
    set(val, index) { 
        let node = this.get(index);
        if(node === null) return false;
        node.val = val;
        return true;   
    }
    insert(val, index) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(val);
        if(index === 0) return this.unshift(val);
        let newNode = new Node(val);
        let preNode = this.get(index-1);
        newNode.next = preNode.next;
        preNode.next = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        let prev = this.get(index-1);
        let oldNode = prev.next; 
        prev.next = oldNode.next;
        this.length--;
        return oldNode.val;
    }
    reverse() {
        if(this.length === 1) return false;
        this.tail = this.head;
        let node = this.head;
        let next = node.next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            node.next = prev;
            prev = node;
            node = next;
            if(next) next = next.next; 
        }
        this.head = prev;
    }
}

var list = new singlyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.insert(400, 3);
list.print();
list.reverse();
console.log(list);
list.print();

