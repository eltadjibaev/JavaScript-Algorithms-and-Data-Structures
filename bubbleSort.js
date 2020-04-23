function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) swap(arr, j, j+1);
        }
    }
    return arr;
}

const swap = (arr, ind1, ind2) => [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];

console.log(bubbleSort([29,10,14,30,37,14,18]));