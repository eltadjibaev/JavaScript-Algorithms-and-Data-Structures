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

function someRecursive(arr){
    if(arr.length === 0) return false;
    else if(arr[0] % 2 !== 0) return true;
    return someRecursive(arr.slice(1));
}

console.log(someRecursive([1,2,3,4])); // true
console.log(someRecursive([4,6,8,9])); // true
console.log(someRecursive([4,6,8])); // false
console.log(someRecursive([4,6,8])); // false


  