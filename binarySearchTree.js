
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if(!this.root) { 
            this.root = newNode; 
            return true;
        }
        let current = this.root;
        while(true) {
            if(value === current.value) return undefined;
            if(value < current.value) { 
                if (!current.left) {
                    current.left = newNode; return this;
                } 
                current = current.left; 
            }
            else if(value > current.value){
                if (!current.right) {
                    current.right = newNode; return this;
                } 
                current = current.right;
            }
        }
    }

    find(value) {
        let current = this.root;
        if(!current) return false;
        if(current.value === value) return this;
        while(current) {
            if(current.value > value) {
                if(current.left && current.left.value === value) return current.left;
                current = current.left;
            } else if(current.value < value) {
                if(current.right && current.right.value === value) return current.right;
                current = current.right;
            }
        }
        return false;
    }
}

var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(13);
bst.insert(9);
bst.insert(11);
console.log(bst.find(11));