/* 
    Write an async function locateScalpel that does this,starting at the nest on which it runs.
    You can use the anyStorage function defined earlier to access storage in arbitrary nests.
    The scalpel has been going around long enough that you may assume that every nest has a "scalpel" entry in its data storage.
    
    Next, write the same function again without using async and await.
*/

// Async Function.
async function locateScalpel(nest) {
    let currentNest = nest.name;
    for (; ;) {
        let nextNest = await anyStorage(nest, currentNest, "scalpel");
        if (currentNest == nextNest) return currentNest;
        currentNest = nextNest;
    }
}

// The same function without using async and await.
function locateScalpel2(nest) {
    function loop(currentNest) {
        return anyStorage(nest, currentNest, "scalpel").then(nextNest => {
            if (nextNest == currentNest) return currentNest;
            else return loop(nextNest);
        });
    }
    return loop(nest.name);
}

locateScalpel(bigOak).then(value => console.log('1st:', value));
// → Butcher Shop
locateScalpel2(bigOak).then(value => console.log('2nd:', value));
// → Butcher Shop