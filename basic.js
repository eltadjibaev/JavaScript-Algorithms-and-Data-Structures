//1
/*function addUpTo(n) {
    return n * (n + 1) / 2;
}

console.log(addUpTo(10));*/

/////////////////////////////////////////////

/* Recursion Problems */
// 1

/*function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent-1);
}

console.log(power(2,0));   // power(2,0) // 1
console.log(power(2,2));   // power(2,2) // 4
console.log(power(2,4));   // power(2,4) // 16*/

//////////////////////////////////////////////

// 2

/*function factorial(val){
   if(val === 0) return 1;
   return val * factorial(val-1);
}

console.log(factorial(1));  //factorial(1) // 1
console.log(factorial(2));  //factorial(2) // 2
console.log(factorial(4));  //factorial(4) // 24
console.log(factorial(7));  //factorial(7) // 5040*/

////////////////////////////////////////////////////

// 3

/*function productOfArray(arr) {
    if(arr.length === 0) { return 1; }
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3])); // productOfArray([1,2,3]) // 6
console.log(productOfArray([1,2,3,10])); // productOfArray([1,2,3,10]) // 60*/

//////////////////////////////////////////////////////////////////

// 4 

/*function recursiveRange(val){
   if(val === 1) return 1;
   return val + recursiveRange(val-1);
}

console.log(recursiveRange(6)); // recursiveRange(6) // 21
console.log(recursiveRange(10)); // recursiveRange(10) // 55*/

/////////////////////////////////////////////////////////

// 5

/*function fib(val){
      if(val <= 2) return 1;
      return fib(val-1) + fib(val - 2);
}
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465*/

///////////////////////////////////////////////////////

// 6

/*function reverse(str){
    if(str === "") return "";
    else return reverse(str.substr(1)) + str.charAt(0);
}
  
  console.log(reverse('awesome')); // 'emosewa'
  console.log(reverse('rithmschool')); // 'loohcsmhtir'*/

/////////////////////////////////////////////////////////////

// 7

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

/*function isPalindrome(s){
    if(s.length <= 1) return true;
    let [first] = s;
    let last = s[s.length - 1];
    if(first === last) {
        let str = s.substring(1, s.length-1)
        return isPalindrome(str);
    } else { return false; }
}

console.log(isPalindrome('tacocat'));*/

///////////////////////////////////////////////////

// 8

// const isOdd = val => val % 2 !== 0;

/*function someRecursive(arr){
    if(arr.length === 0) return false;
    else if(arr[0] % 2 !== 0) return true;
    return someRecursive(arr.slice(1));
}

console.log(someRecursive([1,2,3,4])); // true
console.log(someRecursive([4,6,8,9])); // true
console.log(someRecursive([4,6,8])); // false
console.log(someRecursive([4,6,8])); // false */

//////////////////////////////////////////////////////////////

// 9

/*function flatten(oldArr){
    var newArr = [];
    for (let i = 0; i < oldArr.length; i++) {
        if(Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]));
        } else {
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
  }
  
  console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
  console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
  console.log(flatten([[1],[2],[3]])); // [1,2,3]
  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]*/

  ///////////////////////////////////////////////////////////////////

  /*function capitalizeFirst (arr) {
    if(arr.length === 0) return [];
    var newArr = [];
    newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
    newArr.unshift(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    return newArr;
  }
  
  console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana'] */

  ////////////////////////////////////////////////////////////////////////

  /*function nestedEvenSum (obj) {
    let sum = 0;
    function inner(obj){
        for(let val in obj){
            if(typeof obj[val] === 'number' && obj[val] % 2 === 0) sum += obj[val];
            else if(typeof obj[val] === 'object') inner(obj[val]);
        }
    }
    inner(obj);
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
  console.log(nestedEvenSum(obj2)); // 10 */

  ///////////////////////////////////////////////////////////////

  /*function capitalizedWords (arr) {
    if(arr.length === 0) return [];
    var newArr = [];
    newArr = newArr.concat(capitalizedWords(arr.slice(1)));
    newArr.unshift(arr[0].toUpperCase());
    return newArr;
  }
  
  let words = ['i', 'am', 'learning', 'recursion'];
  console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']*/

  ////////////////////////////////////////////////////////////////////


/*let obj = {
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


function stringifyNumbers(obj) {
    function inner(obj) {
        for(let i in obj) {
            if(typeof obj[i] === 'number')  obj[i] = obj[i].toString();
            else if(typeof obj[i] === 'object') inner(obj[i]);
        }
    }
    inner(obj);
    return obj;
}

console.log(stringifyNumbers(obj));
/*{
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

//////////////////////////////////////////////////////////////////////////////

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

function collectStrings(obj){
    var arr = [];
    function inner(obj){
        for(let val in obj) {
            if(typeof obj[val] === 'string') arr.push(obj[val]);
            else if(typeof obj[val] === 'object') inner(obj[val]);
        }
    }
    inner(obj);
    return arr;
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])
  