import coating = require('../dist/coating');

type cb<T> = (value: T, index?: number, array?: T[]) => boolean;
type ops<T> = (value: T) => T;

let isOdd = (value: number) => value % 2 != 0;
let isEven = (value: number) => !isOdd(value);

let sumFilterMap = coating((condition: cb<number>, operator: ops<number>, values: number[]) => {
    let sum = 0;
    values.forEach((value, index, array) => {
        if (condition(value, index, array)) {
            sum += operator(value);
        }
    });
    return sum;
});

let square = (value: number) => value * value;
let sumOddSquare = sumFilterMap(isOdd, square);
let sumEvenSqrt = sumFilterMap(isEven, Math.sqrt);

console.log(sumOddSquare([0, 1, 2, 3, 4, 5]));
console.log(sumEvenSqrt([0, 1, 4, 9, 16, 25]));
