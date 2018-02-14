"use strict";
const symbol = Symbol('coating');
let coating = function (func, thisArg = null) {
    return internalCoating(func, thisArg, null);
};
coating.functional = function (target, propertyKey, descriptor) {
    let func = target[propertyKey];
    target[propertyKey] = internalCoating(func, target, null);
};
function internalCoating(func, thisArg, args) {
    if (!func) {
        throw new Error('Argument "func" is null.');
    }
    if (func.length == 0 ||
        Object.getOwnPropertySymbols(func).indexOf(symbol) != -1) {
        if (thisArg)
            return func.bind(thisArg);
        return func;
    }
    let r = function () {
        let required = this.origin.length - this.args.length;
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
    };
    r[symbol] = true;
    r.args = args || [];
    r.me = thisArg;
    r.origin = func;
    return r.bind(r);
}
module.exports = coating;
//# sourceMappingURL=coating.js.map