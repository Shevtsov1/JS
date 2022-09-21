function deepEqual(firstValue, secondValue) {
    if ( (typeof firstValue == 'object' && firstValue != null) && 
         (typeof secondValue == 'object' && secondValue != null) ) {
    
        if (Object.keys(firstValue).length != Object.keys(secondValue).length) {
            return false;
        } else {
                if (JSON.stringify(firstValue) === JSON.stringify(secondValue)) {
                    return true;
                } else {
                    return false;
                }
        }
    } else {
        if (firstValue !== secondValue) {
            return false;
        } else {
            return true;
        }
    }
}

let obj = {here: {is: 'an'}, object: 2};

console.log( deepEqual(5, 5) );
console.log( deepEqual(obj, obj) );
console.log( deepEqual(obj, {here: 1, object: 2}) );
console.log( deepEqual(obj, {here: {is: 'an'}, object: 2}) );