const swap = (arr, ind1, ind2) => [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
function bubbleSort(arr, comparator){
    if (typeof comparator !== 'function') {
        for (let i = arr.length; i > 0; i--) {
            for (let j = 0; j < i - 1; j++) {
                if(arr[j] > arr[j+1]) swap(arr, j, j+1);
            }
        }
    } else {
        for (let i = arr.length; i > 0; i--) {
            for (let j = 0; j < i-1; j++) {
                if(comparator(arr[j], arr[j+1])) {
                    swap(arr, j, j+1);
                }
            }
        }
    }
    return arr;
}

function strComp(a, b) {
    return (a<b?false:(a>b?true:0));
}

function oldestToYoungest(a, b) {
    return a.age < b.age;
}

console.log(bubbleSort([4,20,12,10,7,9]));
var kities = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];
var kities = ['L', 'G', 'H', 'B', 'G'];
console.log(bubbleSort(kities, strComp));
var moarKittyData = [{name: 'Lilbub', age: 7},{name: 'Blue', age: 1},{name: 'Heathcliff', age: 45},
{name: 'Garfie', age: 40},{name: 'Grumpy', age: 6}];
console.log(bubbleSort(moarKittyData, oldestToYoungest));
