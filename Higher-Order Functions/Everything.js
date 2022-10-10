function everyLoop(array, test) {
    for (let element of array) {
        if (test(element) === false) {
            return false;
        }
    }
    return true;
}

function everySome(array, test) {
    return !array.some(element => !test(element));
}

console.log(everyLoop([1, 3, 5], n => n < 10));
console.log(everyLoop([2, 4, 16], n => n < 10));
console.log(everyLoop([], n => n < 10));

console.log(everySome([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(everySome([], n => n < 10));
