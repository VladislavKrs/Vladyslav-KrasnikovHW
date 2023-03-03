'use strict'

function sumFunction(a = 0) {
    let counter = a

    return function(b) {
        counter += b;
        return counter;
    }
}

const sum = sumFunction();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
