function naiveSearch(s1, s2) {
    let cnt = 0;
    for (let i = 0; i < s1.length; i++) {
        trust = true;
        for (var j = 0; j < s2.length; j++) {
            if(s1[i+j] < s1.length && s1[i+j] !== s2[j]) { break; }
        }
        if(j === s2.length-1) {cnt++; }
    }
    return cnt;
}

console.log(naiveSearch('lorie loled', 'lol'));