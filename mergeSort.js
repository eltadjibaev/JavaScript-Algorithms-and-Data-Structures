function merge(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;
    while (arr1.length > i && arr2.length > j) {
        if(arr1[i] > arr2[j]) result.push(arr2[j++]);
        else result.push(arr1[i++]);
    }
    while (arr1.length > i) result.push(arr1[i++]);
    while (arr2.length > j) result.push(arr2[j++]);
    return result;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([8,3,5,4,7,6,1,2]));