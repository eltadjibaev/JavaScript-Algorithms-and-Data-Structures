function selectionSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]) min = j;
        }
        if(i !== min) [arr[i], arr[min]] = [arr[min], arr[i]]; 
    }
}

var arr = [29,10,14,30,37,14,18];
selectionSort(arr); console.log(arr);