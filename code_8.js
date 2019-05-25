 
 class Node {
     constructor(val) {
         this.val = val;
         this.next = null;
         this.prev = null;
     }
 }

 class DoublyLinkedList {
     constructor() {
         this.head = null;
         this.tail = null;
         this.length = 0;
     }

     push(val) {
         var newNode = new Node(val);
         if(this.head === null) {
             this.head = newNode; 
             this.tail = newNode; 
         } else {
             this.tail.next = newNode;
             newNode.prev = this.tail;
             this.tail = newNode;
         }
         this.length++;
         return this; 
     }

     pop() {
         if (!this.head) { return undefined; }
         let poppedNode = this.tail;
         if(this.length === 1) {
             this.head = null;
             this.tail = null;
         } else {
             this.tail = this.tail.prev;
             this.tail.next = null; 
             poppedNode.prev = null;
         }
         this.length--;
         return poppedNode;
     }

     shift() {
         if(!this.head) return undefined;
         let shiftedNode = this.head;
         if (this.length === 1) {
             this.head = null;
             this.tail = null;
         } else {
             this.head = shiftedNode.next;
             this.head.prev = null;
             shiftedNode.next = null;
         }
         this.length--;
         return shiftedNode;
     }

     unshift(val) {
         let newNode = new Node(val);
         if (this.length === 0) {
             this.head = newNode;
             this.tail = newNode;
         } else {
             this.head.prev = newNode;
             newNode.next = this.head;
             this.head = newNode;
         }
         this.length++;
         return this;
     }

     display() {
         let node = this.head;
         let arr = [];
         while(node !== null) {
             arr.push(node.val);
             node = node.next;
         }
         console.log(arr);
     }
 }

 var list = new DoublyLinkedList();
 list.unshift(8);
 list.unshift(18);
 list.unshift(19);
 list.unshift(29);
 list.unshift(39);
 list.display();