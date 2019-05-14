
function merge(arr1, arr2){
    let arr = [], i = 0, j = 0, k = 0;
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) arr.push(arr1[i++]);
        else arr.push(arr2[j++]);
    }
    while(i < arr1.length) arr.push(arr1[i++]);
    while(j < arr2.length) arr.push(arr2[j++]);

    return arr;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));