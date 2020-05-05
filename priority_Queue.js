
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const node = this.values[index];
        while(index > 0) {
            let parentIndex = Math.floor((index-1) / 2);
            if(node.priority <= this.values[parentIndex].priority) break;
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            index = parentIndex; 
        }
    }

    dequeue() {
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
            if(this.values[leftIdx] && this.values[idx].priority < this.values[leftIdx].priority || this.values[rightIdx] && this.values[idx].priority < this.values[rightIdx].priority) {
                if(this.values[leftIdx] && this.values[rightIdx]) {
                    if(this.values[leftIdx].priority > this.values[rightIdx].priority) {
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

}

let hospital = new PriorityQueue();

hospital.enqueue('common cold', 1);
hospital.enqueue('gunshot wound', 5);
hospital.enqueue('high fever', 2);

console.log(hospital.dequeue());
