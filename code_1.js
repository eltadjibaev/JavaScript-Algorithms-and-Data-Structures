
// #1
/*const isOdd = val => val % 2 !== 0;

function someRecursive(arr, isOdd){
    if(arr.length === 0) return false;
    if(isOdd(arr[0])) return true;
    return someRecursive(arr.slice(1), isOdd);
}


console.log(someRecursive([8,2,6,4], isOdd));*/


/////////////////////////////////////////////////

// #2

/*function flatten(oldArr){
    let newArr = [];
    for (let i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]));
        } else {
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
  }
  
  console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
  console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]*/

  ////////////////////////////////////////////////////////////////////////////

  // #3

  /*function capitalizeFirst (arr) {
    let newArr = [];
    if (arr.length === 0) return newArr;
    newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
    return newArr;
  }

  function capitalizeFirst (array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
  }
  
  console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']*/


  ///////////////////////////////////////////////////////////////////////////////////

// #4

/*function nestedEvenSum (obj, sum=0) {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else if(typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  console.log(nestedEvenSum(obj1)); // 6
  console.log(nestedEvenSum(obj2)); // 10*/

  ////////////////////////////////////////////////////////

  // #5

  /*function capitalizeWords (arr) {
    if(arr.length === 1) return [arr[0].toUpperCase()];
    let newArr = capitalizeWords(arr.slice(0, -1));
    newArr.push(arr[arr.length-1].toUpperCase());
    return newArr;
  }

  function capitalizedWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizedWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }
  
  let words = ['i', 'am', 'learning', 'recursion'];
  console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']*/


  ////////////////////////////////////////////////////////////////////////////

  // #6

/*function stringifyNumbers(obj){
    let newObj = {};
    for (const key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else if(typeof obj[key] === 'number'){
            newObj[key] = obj[key].toString();
        } else {
            newObj[key] = obj[key]; 
        }
    }
    return newObj;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(obj));*/

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

////////////////////////////////////////////////////////////////////////

// #7

function collectStrings(obj){
    let arr = [];
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            arr.push(obj[key]);
        } else if(typeof obj[key] === 'object'){
            arr = arr.concat(collectStrings(obj[key]));
        }
    }
    return arr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])