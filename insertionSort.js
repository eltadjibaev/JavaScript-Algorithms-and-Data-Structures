
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let val = arr[i];
        let index = i - 1;
        while(index >= 0 && val < arr[index]) {
            arr[index+1] = arr[index];
            index--;
        }
        arr[index+1] = val;  
    }
    return arr;
}

console.log(insertionSort([29,10,14,30,37,14,18, 3, 9, 80]));

