
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
MaxHeap.insert(41);
MaxHeap.insert(39);
MaxHeap.insert(33);
MaxHeap.insert(18);
MaxHeap.insert(27);
MaxHeap.insert(12);
MaxHeap.insert(55);
console.log(MaxHeap.values);
console.log(MaxHeap.removing());
console.log(MaxHeap.values);
