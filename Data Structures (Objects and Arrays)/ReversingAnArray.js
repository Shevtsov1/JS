function reverseArray(givenArr) {
    let newArr = [];
    for (let element of givenArr) {
        newArr.unshift(element);
    }
    return newArr;
}

function reverseArrayInPlace(givenArr) {
    let temp;
    for (let i = 0; i < Math.floor(givenArr.length / 2); i++) {
            let j = givenArr.length - 1 - i;
            temp = givenArr[i];
            givenArr[i] = givenArr[j];
            givenArr[j] = temp;   
    }
}


console.log( reverseArray(['A', 'B', 'C']) );
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
