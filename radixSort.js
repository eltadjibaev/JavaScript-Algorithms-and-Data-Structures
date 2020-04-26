
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigit(nums) {
    let maxDigit = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(nums[i]));
    }
    return maxDigit;
}

function radixSort(nums) {
    let limit = mostDigit(nums);
    for (let k = 0; k < limit; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([82,31,3,9,50,48,71,68,19,21]));