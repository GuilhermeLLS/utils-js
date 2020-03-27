const getRandomNumbersArray = (length, range) => {
    [...new Array(length)].map(
        () => Math.round(Math.random() * range)) as number[];
}

// this will create an array with 5 elements with values between 0 and 10
const newArrayLength = 5;
const elementsRange = 10;
console.log(getRandomNumbersArray(5, 10));