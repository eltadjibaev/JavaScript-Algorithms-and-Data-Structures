 
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
 list.push(8);
 list.push(18);
 list.push(19);
 list.push(29);
 list.push(39);
 list.display();
 list.display();