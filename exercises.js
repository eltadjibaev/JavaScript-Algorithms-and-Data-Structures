const swap = (arr, ind1, ind2) => [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
function bubbleSort(arr, strComp){
  for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if(strComp(arr[j], arr[j+1])) swap(arr, j, j+1);
        }
    }
    return arr;
}
function strComp(a, b) {
    if(a < b) return -1;
    else if(a > b) return 1;
    else return 0;
}
