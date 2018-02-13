declare const symbol: symbol;
declare function coating(func: Function, thisArg?: any): any;
declare function internalCoating(func: Function, thisArg: any, args: any[]): any;
interface wrapper {
    (): any;
    args: any[];
    me: any;
    origin: Function;
}
declare function test(a: any, b: any, c: any): any;
declare let t: any;
