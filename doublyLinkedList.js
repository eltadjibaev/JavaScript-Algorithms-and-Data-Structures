class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList {
     constructor(){
         this.head = this.tail = null;
         this.length = 0;
     }

     push(val) {
        let newNode = new Node(val);
        if(!this.head) this.head = this.tail = newNode;
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return true;
     }

     pop() {
        if(!this.head) return undefined;
        let poppedNode = this.tail; 
        if(this.head === this.tail) this.head = this.tail = null;
        else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
        }
        this.length--;
        return poppedNode;
     }

     shift() {
         if(this.length === 0) return undefined;
         let oldHead = this.head;
         if(this.head === this.tail) this.head = this.tail = null;
         else {
             this.head = oldHead.next;
             this.head.prev = null;
             oldHead.next = null;
         } 
         this.length--;
         return oldHead;
     }

     unshift(val) {
         let newNode = new Node(val);
         if(this.length === 0) this.head = this.tail = newNode;
         else {
             newNode.next = this.head;
             this.head.prev = newNode;
             this.head = newNode;
         }
         this.length++;
         return this;
     }

     get(index) {
         if(index < 0 || index >= this.length) return null;
         let currentNode;
         if(index <= (this.length / 2)) {
             currentNode = this.head;
             for (let i = 0; i < index; i++) currentNode = currentNode.next;
         } else {
             currentNode = this.tail
             for (let i = this.length-1; i > index; i--) currentNode = currentNode.prev;
         }
         return currentNode;
     }

     set(val, index) {
         let node = this.get(index);
         if(node) {
             node.val = val;
             return true;
         }
         return false;
     }

     print() {
         let current = this.head;
         while(current){
             console.log(current.val);
             current = current.next;
         }
     }

     insert(val, index) {
         if(index < 0 || index > this.length) return false;
         if(index === 0) return this.unshift(val);
         if(index === this.length) return this.push(val);
         let newNode = new Node(val);
         let currentNode = this.get(index);
         newNode.prev = currentNode.prev;
         newNode.next = currentNode;
         currentNode.prev.next = newNode;
         currentNode.prev = newNode;
         this.length++;
         return true;
     }
 }

 var list = new doublyLinkedList();
 list.push(100);
 list.push(200);
 list.push(300);
 console.log(list.insert(400, 2));
 list.print();
 console.log(list.insert(50, 4));
 list.print();