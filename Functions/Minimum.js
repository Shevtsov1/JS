function min(firstValue, secondValue) {
    if (firstValue < secondValue) {
        return firstValue;
    } else if (secondValue < firstValue) {
        return secondValue
    } else {
        return 'Numbers are equal.'
    }
}

console.log( min(0, 10) );
console.log( min(0, -10) );
