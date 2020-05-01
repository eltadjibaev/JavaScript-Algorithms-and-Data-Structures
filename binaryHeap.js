
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
        this.values.pop();
        this.sinkDown();
    }

    sinkDown() {
        let parentIndex = 0;
        let leftIndex = 2 * parentIndex + 1;
        let rightIndex = 2 * parentIndex + 2;
        if(this.values[parentIndex] < this.values[leftIndex] || this.values[parentIndex] < this.values[rightIndex]) {
            if(this.values[leftIndex] > this.values[rightIndex]) {
                [this.values[leftIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[leftIndex]];
                parentIndex = leftIndex; 
            } else {
                [this.values[rightIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[rightIndex]]; 
                parentIndex = rightIndex;
            }
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
MaxHeap.insert(12);
MaxHeap.insert(27);
MaxHeap.insert(18);
MaxHeap.insert(33);
MaxHeap.insert(39);
MaxHeap.insert(41);
MaxHeap.insert(55);
console.log(MaxHeap.values);