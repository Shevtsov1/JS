function deepEqual(firstValue, secondValue) {
    if ( (typeof firstValue == 'object' && firstValue != null) && 
         (typeof secondValue == 'object' && secondValue != null) ) {

        if (Object.getOwnPropertyNames(firstValue).length != Object.getOwnPropertyNames(secondValue).length) {
            return false;
        } else {
                for (let property in firstValue) {
                    if ( !property in secondValue ||
                         !deepEqual( firstValue[property], secondValue[property]) ) {
                            return false;
                         }
                }
                for (let property in secondValue) {
                    if ( !(property in firstValue) ||
                         !deepEqual( firstValue[property], secondValue[property]) ) {
                            return false;
                    }
                }
                return true;
        }
    } else {
        return firstValue === secondValue;
    }
}

let obj = {here: {is: 'an'}, object: 2};

console.log( deepEqual(5, 5) );
console.log( deepEqual(obj, obj) );
console.log( deepEqual(obj, {here: 1, object: 2}) );
console.log( deepEqual(obj, {here: {is: 'an'}, object: 2}) );

const a = Object.create(null, {
    a: { value: 1 },
    b: { value: 2 },
    
});

const b = {a: 1, b: 2};

console.log(deepEqual(a, b));