
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




/*function name(nums) {
  let res = [];
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
      if(obj[nums[i]]) obj[nums[i]]++;
      else obj[nums[i]] = 1;
      if(obj[nums[i]] > 1) res.push(nums[i]);
  } 
  
  return res; 
}

//name([4,3,2,7,8,2,3,1]);
console.log(name([4,3,2,7,8,2,3,1]));*/

/*let Node = function() {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function() {
        this.end = true;
    };
    this.isEnd = function() {
        return this.end;
    }
}

let Trie = function() {
    this.root = new Node();

    this.add = function(input, node = this.root) {
        if(input.length == 0) {
            node.setEnd(); return;
        } else if(!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0]));
        } else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        }
    }

    this.isWord = function(word) {
        let node = this.root;
        while(word.length > 1) {
            if(!node.keys.has(word[0])) {
                return false;
            }
            else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            }
        }
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    }

    this.print = function() {
        let words = new Array();
        let search = function(node = this.root, string) {
            if(node.keys.size != 0){
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter));
                }
                if(node.isEnd()) {
                    words.push(string);
                }
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            }
        }
        search(this.root, new String());
        return words.length > 0 ? words : null;
    }
}

let trie = new Trie();
trie.add('fun');
console.log(trie.keys);
/*trie.add('bat');
trie.add('doll');
trie.add('dork');
trie.add('do');
trie.add('dorm');
trie.add('send');
trie.add('sense');*/
//console.log(trie.print()); */
