// #1 ==> Bubble Sort

//const swap = (arr, num1, num2) => [arr[num1], arr[num2]] = [arr[num2], arr[num1]];

/*function bubleSort(arr){
    let noSwap;
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
}

(function(){
    let arr = [15, 89, 2, 44, 9, 6, 79, 66, 0, 40];
    bubleSort(arr); 
    console.log(arr);
})();*/

//////////////////////////////////////////////////

// #2 ==> Selection Sort

/*function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if(min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
}

let arr = [15, 89, 2, 44, 9, 6, 79, 66, 0, 40];
selectionSort(arr); 
console.log(arr);*/

/////////////////////////////////////////////////////

// #3 ==> Insertion Sort

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        let j = i-1;
        while(j >= 0 && tmp < arr[j]) { 
            arr[j+1] = arr[j]; 
            j--;
        }
        if(arr[i] !== tmp) arr[++j] = tmp;
    }
    return arr;
}

let arr = [15, 89, 2, 44, 9, 6, 79, 66, 0, 40];; 
console.log(insertionSort(arr));