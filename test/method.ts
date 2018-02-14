import coating = require('../dist/coating')

class foo {
    private mutilpier = 2;
    public bar(a, b, c) {
        return (a + b * c) * this.mutilpier;
    }
}

export default function runTest(assertEqual: (expect: Object, result: Object) => void): number {
    let f = new foo();
    let result_1 = coating(f.bar, f)(1);
    assertEqual(f.bar(1, 2, 3), result_1(2, 3));
    assertEqual(f.bar(1, 3, 4), result_1(3, 4));

    return 0;
}
