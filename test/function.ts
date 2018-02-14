import coating = require('../dist/coating')

function calculate(a, b, c) {
    return a + b * c;
}

export default function runTest(assertEqual: (expect: Object, result: Object) => void): number {
    let result_1 = coating(calculate)(1);
    let result_1_2 = result_1(2);
    let result_1_2_3 = result_1_2(3);
    let expect = calculate(1, 2, 3);
    assertEqual(expect, result_1_2_3);
    assertEqual(expect, result_1(2, 3));

    return 0;
}
