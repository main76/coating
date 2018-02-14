import coating = require('../dist/coating')

function calculate(a, b, c, d=2) {
    return (a + b * c) * d;
}

export default function runTest(assertEqual: (expect: Object, result: Object) => void): number {
    let result_1_2 = coating(calculate)(1, 2);

    assertEqual(calculate(1, 2, 3), result_1_2(3));
    assertEqual(calculate(1, 2, 3, 4), result_1_2(3, 4));

    return 0;
}
