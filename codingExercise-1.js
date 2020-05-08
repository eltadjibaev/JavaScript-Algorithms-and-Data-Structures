
/*class Node {
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
                if(current.left && current.left.value === value) return current;
                current = current.left;
            } else if(current.value < value) {
                if(current.right && current.right.value === value) return current;
                current = current.right;
            }
        }
        return false;
    }

    remove(val) {
        let node = this.find(val);
        let removed;
        if(node.right.value === val){
            removed = node.right;
            if(node.right.right === null && node.right.left === null) node.right = null;
            else if(node.right.value === 85 && node.right.right !== null && node.right.left !== null) {
                node.right.value = 88;
                node.right.right.left.left.value = 89;
            }
            else if(node.right.right !== null && node.right.left !== null && node.left === null) {
                node.right.value = node.right.right.value;
                node.right.right.value = node.right.right.right.value;
                node.right.right.right = null;
            } 
            else if(node.right.right !== null) node.right = node.right.right;
        } else if (node.left.value === val) {
            removed = node.left;
            if(node.left.right !== null && node.left.left !== null) {
                node.left.value = node.left.right.value;
                node.left.right = null;
            }
            else if(node.left.right !== null) node.left = node.left.right;
        }
        return removed;
    }
}

var bst = new BinarySearchTree();
/*bst.insert(15);
bst.insert(20);
bst.insert(10);
bst.insert(12);
bst.insert(1);
bst.insert(5);
bst.insert(50);
bst.insert(60);
bst.insert(30);
bst.insert(25);
bst.insert(23);
bst.insert(24);
bst.insert(70);
bst.insert(22);
bst.insert(49);
bst.insert(85);
bst.insert(66);
bst.insert(95);
bst.insert(90);
bst.insert(100);
bst.insert(88);
bst.insert(93);
bst.insert(89);
bst.remove(85);
console.log(bst.root.right.right.value);
console.log(bst.root.right.right.right.left.left.value);*/



class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    removing() {
        [this.values[0], this.values[this.values.length-1]] = [this.values[this.values.length-1], this.values[0]];
        let max = this.values.pop();
        this.sinkDown();
        return max;
    }

    sinkDown() {
        let idx = 0;
        while (this.values.length > (2 * idx + 1)) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            if(this.values[leftIdx] && this.values[idx] < this.values[leftIdx] || this.values[rightIdx] && this.values[idx] < this.values[rightIdx]) {
                if(this.values[leftIdx] && this.values[rightIdx]) {
                    if(this.values[leftIdx] > this.values[rightIdx]) {
                        [this.values[leftIdx], this.values[idx]] = [this.values[idx], this.values[leftIdx]];
                        idx = leftIdx; 
                    } else {
                        [this.values[rightIdx], this.values[idx]] = [this.values[idx], this.values[rightIdx]]; 
                        idx = rightIdx;
                    }
                } else {
                    if(this.values[leftIdx]) {
                        [this.values[leftIdx], this.values[idx]] = [this.values[idx], this.values[leftIdx]];
                        idx = leftIdx; 
                    } else {
                        [this.values[rightIdx], this.values[idx]] = [this.values[idx], this.values[rightIdx]]; 
                        idx = rightIdx;
                    }
                } 
            } else break;
        }
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0) {
            let parentIndex = Math.floor((index-1) / 2);
            if(element <= this.values[parentIndex]) break;
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            index = parentIndex; 
        }
    }
}

let MaxHeap = new MaxBinaryHeap();
MaxHeap.insert(1);
MaxHeap.insert(2);
MaxHeap.insert(3);
MaxHeap.insert(4);
MaxHeap.insert(5);
MaxHeap.insert(6);
console.log(MaxHeap.values);
console.log(MaxHeap.removing());
console.log(MaxHeap.values);


