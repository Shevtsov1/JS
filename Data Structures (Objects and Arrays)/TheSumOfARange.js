function range(startNum, endNum, step) {
    let arr = [];
    if (step > 0) {
        for (let i = startNum; i <= endNum; i += step) {
            arr.push(i);
        } 
    } else {
        for (let i = startNum; i >= endNum; i += step) {
            arr.push(i);
        }
    }
    return arr;
}

function sum(numbers) {
    let sum = 0;
    for (let element of numbers) {
        sum += element;
    }
    return sum;
}

console.log( range(1, 10, 1) );
console.log( range(5, 2, -1) );
console.log( sum(range(1, 10, 1)) );
