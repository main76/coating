const symbol = Symbol('coating');

function coating(func: Function, thisArg = null) {
    return internalCoating(func, thisArg, null);
}

function internalCoating(func: Function, thisArg, args: any[]) {
    if (!func) {
        throw new Error('Argument "func" is null.');
    }

    if (func.length == 0 ||
        Object.getOwnPropertySymbols(func).indexOf(symbol) != -1) {
        if (thisArg) 
            return func.bind(thisArg);
        return func;
    }

    let r = function() {
        let required = <number>this.origin.length - this.args.length;
        let args = [];
        for (let i = 0; i < this.args.length; i++) {
            args[i] = this.args[i];
        }
        if (required > arguments.length) {
            for (let i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            return internalCoating(this.origin, this.me, args);
        }
        for (let i = 0; i < required; i++) {
            args.push(arguments[i]);
        }
        return this.origin.apply(this.me, args);
    } as wrapper;

    r[symbol] = true;
    r.args = args || [];
    r.me = thisArg;
    r.origin = func;
    return r.bind(r);
}

interface wrapper {
    (): any;
    args: any[];
    me: any;
    origin: Function;
}

function test(a, b, c) {
    return a + b * c;
}

let t = coating(test);
console.log(t(1, 2, 3)); // 7
console.log(t(1, 2)(3)); // 7
console.log(t(1)(2)(3)); // 7
