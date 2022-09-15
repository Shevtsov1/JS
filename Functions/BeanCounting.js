function countBs(str) {
    let counterBs = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'B') {
            counterBs++;
        }
    }
    return counterBs;
}

function countChar(str, charToCount) {
    let counterChars = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === charToCount) {
            counterChars++;
        }
    }
    return counterChars;
}

console.log( countBs('BBC') );
console.log( countChar('kakkerlak', 'k') )
