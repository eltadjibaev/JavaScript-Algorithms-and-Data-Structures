
class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0, value;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let hashNumber = this._hash(key);
        if(!this.keyMap[hashNumber]) this.keyMap[hashNumber] = [];
        this.keyMap[hashNumber].push([key, value]);
    }

    get(key) {
        let hashNumber = this._hash(key);
        if(this.keyMap[hashNumber]) {
            for (let i = 0; i < this.keyMap[hashNumber].length; i++) {
                if(this.keyMap[hashNumber][i][0] === key) return this.keyMap[hashNumber][i][1];
            }
        }
        return undefined;
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (const val of this.keyMap[i]) {
                    if (!valuesArr.includes(val[1])) {
                        valuesArr.push(val[1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (const val of this.keyMap[i]) {
                    if (!keysArr.includes(val[0])) {
                        keysArr.push(val[0]);
                    }
                }
            }
        }
        return keysArr;
    }
} 

let ht = new HashTable();
ht.set('maroon','#80000');
ht.set('yellow','#FFFF00');
ht.set('olive','#808000');
ht.set('salmon','#FA8072');
ht.set('salmon','#FA8072');
ht.set('plum','DDA0DD');
console.log(ht.keys());

ht.keys().forEach(key => {
    console.log(ht.get(key));
});