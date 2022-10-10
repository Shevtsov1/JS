function loop(currentValue, testFunction, updateFunction, bodyFunction) {
    while (testFunction(currentValue)) {
        bodyFunction(currentValue);
        return loop(updateFunction(currentValue), testFunction, updateFunction, bodyFunction);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
