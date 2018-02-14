import assert = require('assert');
import f from './function';
import m from './method';

var testCases: ((Function) => number)[] = [
    f, m
];
var passed = 0;
for (var i = 0; i < testCases.length; i++) {
    let ut = testCases[i];
    try {
        let code = ut(asserEqual);
        if (code == 0)
            passed++;
    }
    catch (e) {
        console.warn(e.stack);
    }
}
console.log(`${passed} of ${testCases.length} test cases passed.`);
process.exit(0);

function asserEqual(expected, actual) {
    if (actual != expected) {
        var msg = `${expected} was expected, but got ${actual} instead.`
        assert.fail(actual, expected, msg, 'Object.Equals(Object)');
    }
}
