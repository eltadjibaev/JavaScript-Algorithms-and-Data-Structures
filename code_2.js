
// #1

/*function binarySearch(arr, num){
    let middle;
    let start = 0, end = arr.length - 1;
    while(start <= end){
        middle = parseInt((start + end) / 2);
        if(arr[middle] === num) return middle;
        else if(arr[middle] < num) start = middle + 1;
        else if(arr[middle] > num) end = middle - 1;
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 0));*/

///////////////////////////////////////////////////////////

// #2

function naiveSearch(long, short){
    let cnt = 0;
    for (let i = 0; i < long.length; i++)
        for (let j = 0; j < short.length; j++) {
            if(long[i+j] !== short[j]) break;
            if(j === short.length - 1) cnt++;
        }
    return cnt;
}

console.log(naiveSearch('lolito is very good logirl!', 'lo'));