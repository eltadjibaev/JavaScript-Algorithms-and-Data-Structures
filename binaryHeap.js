
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
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
MaxHeap.insert(12);
MaxHeap.insert(27);
MaxHeap.insert(18);
MaxHeap.insert(33);
MaxHeap.insert(39);
MaxHeap.insert(41);
MaxHeap.insert(55);
console.log(MaxHeap.values);