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

    BFS() {
        let node = this.root;
        let queue = [], data = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.BFS());