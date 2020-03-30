function linearSpacedValues(startValue, stopValue, cardinality) {
    const arr = [];
    const step = (stopValue - startValue) / (cardinality - 1);
    for (let i = 0; i < cardinality; i++) {
        arr.push(startValue + (step * i));
    }
    return arr;
}

console.log(linearSpacedValues(50, 200, 4));