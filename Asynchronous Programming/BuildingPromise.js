/*
    Given an array of promises, Promise.all returns a promise that waits for all of the promises in the array to finish.
    It then succeeds, yielding an array of result values.
    If a promise in the array fails, the promise returned by all fails too,
    with the failure reason from the failing promise.

    Implement something like this yourself as a regular function called Promise_all.
*/

function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        let counter = promises.length;
        let results = [];
        try {
            for (let i = 0; i < counter; i++) {
                let last = (i === counter - 1);
                promises[i].then(value => {
                    results[i] = value;
                    if (last) resolve(results);
                }).catch(reject);
            }
            if (counter === 0) resolve(results);
        } catch (e) {
            reject;
        }
    });
}

// Test code.
Promise_all([]).then(array => {
    console.log("This should be []:", array);
});
function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
        console.log("We should not get here");
    })
    .catch(error => {
        if (error != "X") {
            console.log("Unexpected failure:", error);
        }
    }); s