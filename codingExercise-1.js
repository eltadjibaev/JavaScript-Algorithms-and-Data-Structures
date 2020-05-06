
function bubbleSort(arr, comparator){
    if (typeof comparator !== 'function') {
        for (let i = 1; i < arr.length; i++) {
            let val = arr[i];
            let index = i - 1;
            while(index >= 0 && val < arr[index]) {
                arr[index+1] = arr[index];
                index--;
            }
            arr[index+1] = val;  
        }
    } else {
        for (let i = 1; i < arr.length; i++) {
            let val = arr[i];
            let index = i - 1;
            let test = comparator(arr[index], val);
            if(test <= 0) test = 0;
            while(index >= 0 && test) {
                arr[index+1] = arr[index];
                index--;
                if(index >= 0) test = comparator(arr[index], val);
                if(test <= 0) test = 0;
            }
            arr[index+1] = val;  
        }
    }
    return arr;
}

function strComp(a, b) {
    return (a<b?-1:(a>b?1:0));
}

function oldestToYoungest(a, b) {
    return b.age - a.age;
}

console.log(bubbleSort([4,20,12,10,7,9]));

var kities = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];
console.log(bubbleSort(kities, strComp));

var moarKittyData = [{name: 'Lilbub', age: 7},{name: 'Blue', age: 1},{name: 'Heathcliff', age: 45},
{name: 'Garfie', age: 40},{name: 'Grumpy', age: 6}];
console.log(bubbleSort(moarKittyData, oldestToYoungest));