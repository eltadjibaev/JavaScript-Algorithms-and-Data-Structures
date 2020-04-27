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
        if(this.head === this.tail) {
            let current = this.head;
            this.head = this.tail = null;
            this.length = 0;
            return current;
        }
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}

var list = new singlyLinkedList();
list.push('hello');
list.push('bye');
list.push('good bye');
list.print();
list.shift();
list.print();
