//1
/*function addUpTo(n) {
    return n * (n + 1) / 2;
}

console.log(addUpTo(10));*/

/////////////////////////////////////////////

/* Recursion Problems */
// 1
/*function power(num1, num2){
    if(num2 === 0) return 1;
    return num1 * power(num1, num2-1);
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

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if(arr.length === 0) { return 1; }
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3,10]));