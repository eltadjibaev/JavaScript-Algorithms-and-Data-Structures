const swap = (arr, ind1, ind2) => [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];

function bubbleSort(arr, comparator) {
    let test, min;
    if (typeof comparator !== 'function') {
        for (let i = 0; i < arr.length-1; i++) {
            min = i;
            for (let j = i+1; j < arr.length; j++) {
                if(arr[j] < arr[min]) min = j;
            }
            if(i !== min) [arr[i], arr[min]] = [arr[min], arr[i]]; 
        }
    } else {
        for (let i = 0; i < arr.length-1; i++) {
            min = i;
            for (let j = i+1; j < arr.length; j++) {
                test = comparator(arr[j], min);
                console.log(test);
                if(test < 0) test = 0; 
                if(test) {min = j; console.log(arr['in'])}
            }
            if(i !== min) [arr[i], arr[min]] = [arr[min], arr[i]]; 
            console.log(arr[min]);
        }
    }
    return arr;
}

function strComp(a, b) {
    //console.log('in 2');
    if (a < b) return 1; 
    else if(a > b) return -1;
    else return 0;
}

function oldestToYoungest(a, b) {
    return b.age - a.age;
}

//console.log(bubbleSort([4,20,12,10,7,9]));

var kities = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];
console.log(bubbleSort(kities, strComp));

/*var moarKittyData = [{name: 'Lilbub', age: 7},{name: 'Blue', age: 1},{name: 'Heathcliff', age: 45},
{name: 'Garfie', age: 40},{name: 'Grumpy', age: 6}];
console.log(bubbleSort(moarKittyData, oldestToYoungest));*/