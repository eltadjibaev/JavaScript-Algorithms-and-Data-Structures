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
 }

 var list = new doublyLinkedList();
 list.push(100);
 list.push(200);
 list.push(300);
 console.log(list);
 list.pop();
 console.log(list);