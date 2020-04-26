function pivot(arr, start, end) {
    let p = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if(p > arr[i]) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotInd = pivot(arr, left, right);
        quickSort(arr, left, pivotInd-1);
        quickSort(arr, pivotInd+1, right);
    }
    return arr;
}

console.log(quickSort([8,3,5,4,7,6,1,2]));