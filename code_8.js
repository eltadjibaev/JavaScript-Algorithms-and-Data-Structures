 
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
 list.push(89);
 list.push(8);
 list.push(9);
 list.display();
