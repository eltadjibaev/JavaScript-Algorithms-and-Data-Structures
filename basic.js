//1
/*function addUpTo(n) {
    return n * (n + 1) / 2;
}

console.log(addUpTo(10));*/

/////////////////////////////////////////////

/* Recursion Problems */
// 1
function power(num1, num2){
    if(num2 === 0) return 1;
    return num1 * power(num1, num2-1);
}

console.log(power(2,0));   // power(2,0) // 1
console.log(power(2,2));   // power(2,2) // 4
console.log(power(2,4));   // power(2,4) // 16

//////////////////////////////////////////////

// 2
