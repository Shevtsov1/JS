/*
 Say you have a function that in 20 percent of cases multiplies two numbers and
 in the other 80 percent of cases raises an exception of type .
 Write a function that wraps this clunky function and just keeps trying until a call succeeds,
 after which it returns the result.primitiveMultiplyMultiplicatorUnitFailure

 Make sure you handle only the exceptions you are trying to handle. 
*/

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }

}

function reliableMultiply(a, b) {
    
    try {
        primitiveMultiply(a, b);
    } catch (error) {
        if (error instanceof MultiplicatorUnitFailure) {
            reliableMultiply(a, b);
        } else {
            throw new error;
        }
        
    }
    
    return a * b;

}

console.log(reliableMultiply(8,8))
// → 64