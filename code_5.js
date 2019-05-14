
function pivot(arr, start, end){
    function swap(arr, num1, num2) { [arr[num1], arr[num2]] = [arr[num2], arr[num1]] };
    let pivot = arr[start];
    let j = start;
    for (let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) { j++; swap(arr, j, i); }
    }
    swap(arr, start, j);
    return j;
}

function quickSort(arr, start=0, end=arr.length - 1){
    if(start < end){
        pivotIndex = pivot(arr, start, end);
        //left side
        quickSort(arr, start, pivotIndex-1);
        //right side
        quickSort(arr, pivotIndex+1, end);
    }
    return arr;
}

console.log(quickSort([26,23,27,44,17,47,39,42,43,1]));