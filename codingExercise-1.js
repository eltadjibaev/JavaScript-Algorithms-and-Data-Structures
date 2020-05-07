
/*function bubbleSort(arr, comparator){
    if (typeof comparator !== 'function') {
        for (let i = 1; i < arr.length; i++) {
            let val = arr[i];
            let index = i - 1;
            while(index >= 0 && val < arr[index]) {
                arr[index+1] = arr[index];
                index--;
            }
            arr[index+1] = val;  
        }
    } else {
        for (let i = 1; i < arr.length; i++) {
            let val = arr[i];
            let index = i - 1;
            let test = comparator(arr[index], val);
            if(test <= 0) test = 0;
            while(index >= 0 && test) {
                arr[index+1] = arr[index];
                index--;
                if(index >= 0) test = comparator(arr[index], val);
                if(test <= 0) test = 0;
            }
            arr[index+1] = val;  
        }
    }
    return arr;
}

function strComp(a, b) {
    return (a<b?-1:(a>b?1:0));
}

function oldestToYoungest(a, b) {
    return b.age - a.age;
}

console.log(bubbleSort([4,20,12,10,7,9]));

var kities = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];
console.log(bubbleSort(kities, strComp));

var moarKittyData = [{name: 'Lilbub', age: 7},{name: 'Blue', age: 1},{name: 'Heathcliff', age: 45},
{name: 'Garfie', age: 40},{name: 'Grumpy', age: 6}];
console.log(bubbleSort(moarKittyData, oldestToYoungest));

function merge(arr1, arr2, fun) {
    let result = [], test;
    let i = 0, j = 0;
    if (typeof fun !== 'function') {
        while (arr1.length > i && arr2.length > j) {
            if(arr1[i] > arr2[j]) result.push(arr2[j++]);
            else result.push(arr1[i++]);
        }
    } else {
        while (arr1.length > i && arr2.length > j) {
            test = fun(arr1[i], arr2[j]);
            if(test <= 0) test = 0;
            if(test) result.push(arr2[j++]);
            else result.push(arr1[i++]);
        }
    }
    while (arr1.length > i) result.push(arr1[i++]);
    while (arr2.length > j) result.push(arr2[j++]);
    return result;
}

function mergeSort(arr, fun) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right, fun);
}

function oldestToYoungest(a, b) {
    return b.age - a.age;
}

function strComp(a, b) {
    return (a<b?-1:(a>b?1:0));
}

var arr = [4,20,12,10,7,9];
console.log(mergeSort(arr));

var kities = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];
console.log(mergeSort(kities, strComp));

var moarKittyData = [{name: 'Lilbub', age: 7},{name: 'Blue', age: 1},{name: 'Heathcliff', age: 45},
{name: 'Garfie', age: 40},{name: 'Grumpy', age: 6}];
console.log(mergeSort(moarKittyData, oldestToYoungest)); 

function pivot(arr, fun, start=0, end=arr.length-1) {
    let p = arr[start];
    let swapIndex = start;
    if (typeof fun !== 'function') {
        for (let i = start + 1; i <= end; i++) {
            if(p > arr[i]) {
                swapIndex++;
                [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
            }
        }
    } else {
        let test;
        for (let i = start + 1; i <= end; i++) {
            test = fun(p, arr[i]);
            if(test <= 0) test = 0;
            if(test) {
                swapIndex++;
                [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
            }
        }
    }
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
    return swapIndex;
}

function quickSort(arr, fun, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotInd = pivot(arr, fun, left, right);
        quickSort(arr, left, pivotInd-1);
        quickSort(arr, pivotInd+1, right);
    }
    return arr;
}

function strComp(a, b) {
    return (a<b?-1:(a>b?1:0));
}

function oldestToYoungest(a, b) {
    return b.age - a.age;
}

var arr = [8,4,2,5,0,10,11,12];
console.log(quickSort(arr));

var kities = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];
console.log(quickSort(kities, strComp)); */

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

    DFSPreOrder() {
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(15);
tree.insert(20);
tree.insert(10);
tree.insert(12);
tree.insert(1);
tree.insert(5);
tree.insert(50);
console.log(tree.DFSPostOrder());
