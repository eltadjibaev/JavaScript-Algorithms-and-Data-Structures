class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;     
    }
    push(val){
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
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
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        let prev = this.get(index-1);
        let oldNode = prev.next; 
        prev.next = oldNode.next;
        this.length--;
        return oldNode.val;
    }
}

var list = new SinglyLinkedList();
list.push(5).push(10).push(15).push(20);
console.log