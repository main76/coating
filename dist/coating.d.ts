/**
    MIT License

    Copyright (c) 2018 Master Yu.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE
**/

interface Coating1<T1, R> {
    (arg1: T1): R;
}

interface Coating2<T1, T2, R> {
    (arg1: T1): Coating1<T2, R>;
    (arg1: T1, arg2: T2): R;
}

interface Coating3<T1, T2, T3, R> {
    (arg1: T1): Coating2<T2, T3, R>;
    (arg1: T1, arg2: T2): Coating1<T3, R>;
    (arg1: T1, arg2: T2, arg3: T3): R;
}

interface Coating4<T1, T2, T3, T4, R> {
    (arg1: T1): Coating3<T2, T3, T4, R>;
    (arg1: T1, arg2: T2): Coating2<T3, T4, R>;
    (arg1: T1, arg2: T2, arg3: T3): Coating1<T4, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): R;
}

interface Coating5<T1, T2, T3, T4, T5, R> {
    (arg1: T1): Coating4<T2, T3, T4, T5, R>;
    (arg1: T1, arg2: T2): Coating3<T3, T4, T5, R>;
    (arg1: T1, arg2: T2, arg3: T3): Coating2<T4, T5, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Coating1<T5, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): R;
}

interface Coating6<T1, T2, T3, T4, T5, T6, R> {
    (arg1: T1): Coating5<T2, T3, T4, T5, T6, R>;
    (arg1: T1, arg2: T2): Coating4<T3, T4, T5, T6, R>;
    (arg1: T1, arg2: T2, arg3: T3): Coating3<T4, T5, T6, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Coating2<T5, T6, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Coating1<T6, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): R;
}

interface Coating7<T1, T2, T3, T4, T5, T6, T7, R> {
    (arg1: T1): Coating6<T2, T3, T4, T5, T6, T7, R>;
    (arg1: T1, arg2: T2): Coating5<T3, T4, T5, T6, T7, R>;
    (arg1: T1, arg2: T2, arg3: T3): Coating4<T4, T5, T6, T7, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Coating3<T5, T6, T7, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Coating2<T6, T7, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): Coating1<T7, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): R;
}

interface Coating8<T1, T2, T3, T4, T5, T6, T7, T8, R> {
    (arg1: T1): Coating7<T2, T3, T4, T5, T6, T7, T8, R>;
    (arg1: T1, arg2: T2): Coating6<T3, T4, T5, T6, T7, T8, R>;
    (arg1: T1, arg2: T2, arg3: T3): Coating5<T4, T5, T6, T7, T8, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Coating4<T5, T6, T7, T8, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Coating3<T6, T7, T8, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): Coating2<T7, T8, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): Coating1<T8, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8): R;
}

interface Coating9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> {
    (arg1: T1): Coating8<T2, T3, T4, T5, T6, T7, T8, T9, R>;
    (arg1: T1, arg2: T2): Coating7<T3, T4, T5, T6, T7, T8, T9, R>;
    (arg1: T1, arg2: T2, arg3: T3): Coating6<T4, T5, T6, T7, T8, T9, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Coating5<T5, T6, T7, T8, T9, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Coating4<T6, T7, T8, T9, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): Coating3<T7, T8, T9, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): Coating2<T8, T9, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8): Coating1<T9, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9): R;
}

interface Coating10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> {
    (arg1: T1): Coating9<T2, T3, T4, T5, T6, T7, T8, T9, T10, R>;
    (arg1: T1, arg2: T2): Coating8<T3, T4, T5, T6, T7, T8, T9, T10, R>;
    (arg1: T1, arg2: T2, arg3: T3): Coating7<T4, T5, T6, T7, T8, T9, T10, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Coating6<T5, T6, T7, T8, T9, T10, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Coating5<T6, T7, T8, T9, T10, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): Coating4<T7, T8, T9, T10, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): Coating3<T8, T9, T10, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8): Coating2<T9, T10, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9): Coating1<T10, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10): R;
}

interface Coating11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> {
    (arg1: T1): Coating10<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>;
    (arg1: T1, arg2: T2): Coating9<T3, T4, T5, T6, T7, T8, T9, T10, T11, R>;
    (arg1: T1, arg2: T2, arg3: T3): Coating8<T4, T5, T6, T7, T8, T9, T10, T11, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Coating7<T5, T6, T7, T8, T9, T10, T11, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Coating6<T6, T7, T8, T9, T10, T11, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): Coating5<T7, T8, T9, T10, T11, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): Coating4<T8, T9, T10, T11, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8): Coating3<T9, T10, T11, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9): Coating2<T10, T11, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10): Coating1<T11, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11): R;
}

interface Coating12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> {
    (arg1: T1): Coating11<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>;
    (arg1: T1, arg2: T2): Coating10<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>;
    (arg1: T1, arg2: T2, arg3: T3): Coating9<T4, T5, T6, T7, T8, T9, T10, T11, T12, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Coating8<T5, T6, T7, T8, T9, T10, T11, T12, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Coating7<T6, T7, T8, T9, T10, T11, T12, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): Coating6<T7, T8, T9, T10, T11, T12, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): Coating5<T8, T9, T10, T11, T12, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8): Coating4<T9, T10, T11, T12, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9): Coating3<T10, T11, T12, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10): Coating2<T11, T12, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11): Coating1<T12, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12): R;
}

interface Coating13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> {
    (arg1: T1): Coating12<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>;
    (arg1: T1, arg2: T2): Coating11<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>;
    (arg1: T1, arg2: T2, arg3: T3): Coating10<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Coating9<T5, T6, T7, T8, T9, T10, T11, T12, T13, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Coating8<T6, T7, T8, T9, T10, T11, T12, T13, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): Coating7<T7, T8, T9, T10, T11, T12, T13, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): Coating6<T8, T9, T10, T11, T12, T13, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8): Coating5<T9, T10, T11, T12, T13, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9): Coating4<T10, T11, T12, T13, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10): Coating3<T11, T12, T13, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11): Coating2<T12, T13, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12): Coating1<T13, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13): R;
}

interface Coating14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> {
    (arg1: T1): Coating13<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>;
    (arg1: T1, arg2: T2): Coating12<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>;
    (arg1: T1, arg2: T2, arg3: T3): Coating11<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Coating10<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Coating9<T6, T7, T8, T9, T10, T11, T12, T13, T14, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): Coating8<T7, T8, T9, T10, T11, T12, T13, T14, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): Coating7<T8, T9, T10, T11, T12, T13, T14, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8): Coating6<T9, T10, T11, T12, T13, T14, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9): Coating5<T10, T11, T12, T13, T14, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10): Coating4<T11, T12, T13, T14, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11): Coating3<T12, T13, T14, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12): Coating2<T13, T14, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13): Coating1<T14, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13, arg14: T14): R;
}

interface Coating15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> {
    (arg1: T1): Coating14<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>;
    (arg1: T1, arg2: T2): Coating13<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>;
    (arg1: T1, arg2: T2, arg3: T3): Coating12<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Coating11<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Coating10<T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): Coating9<T7, T8, T9, T10, T11, T12, T13, T14, T15, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): Coating8<T8, T9, T10, T11, T12, T13, T14, T15, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8): Coating7<T9, T10, T11, T12, T13, T14, T15, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9): Coating6<T10, T11, T12, T13, T14, T15, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10): Coating5<T11, T12, T13, T14, T15, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11): Coating4<T12, T13, T14, T15, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12): Coating3<T13, T14, T15, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13): Coating2<T14, T15, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13, arg14: T14): Coating1<T15, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13, arg14: T14, arg15: T15): R;
}

interface Coating16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> {
    (arg1: T1): Coating15<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>;
    (arg1: T1, arg2: T2): Coating14<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>;
    (arg1: T1, arg2: T2, arg3: T3): Coating13<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): Coating12<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Coating11<T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): Coating10<T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): Coating9<T8, T9, T10, T11, T12, T13, T14, T15, T16, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8): Coating8<T9, T10, T11, T12, T13, T14, T15, T16, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9): Coating7<T10, T11, T12, T13, T14, T15, T16, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10): Coating6<T11, T12, T13, T14, T15, T16, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11): Coating5<T12, T13, T14, T15, T16, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12): Coating4<T13, T14, T15, T16, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13): Coating3<T14, T15, T16, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13, arg14: T14): Coating2<T15, T16, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13, arg14: T14, arg15: T15): Coating1<T16, R>;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13, arg14: T14, arg15: T15, arg16: T16): R;
}

declare function coating<T1, R>(func: (arg1: T1) => R, thisArgs?: any): Coating1<T1, R>;
declare function coating<T1, T2, R>(func: (arg1: T1, arg2: T2) => R, thisArgs?: any): Coating2<T1, T2, R>;
declare function coating<T1, T2, T3, R>(func: (arg1: T1, arg2: T2, arg3: T3) => R, thisArgs?: any): Coating3<T1, T2, T3, R>;
declare function coating<T1, T2, T3, T4, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R, thisArgs?: any): Coating4<T1, T2, T3, T4, R>;
declare function coating<T1, T2, T3, T4, T5, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R, thisArgs?: any): Coating5<T1, T2, T3, T4, T5, R>;
declare function coating<T1, T2, T3, T4, T5, T6, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => R, thisArgs?: any): Coating6<T1, T2, T3, T4, T5, T6, R>;
declare function coating<T1, T2, T3, T4, T5, T6, T7, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => R, thisArgs?: any): Coating7<T1, T2, T3, T4, T5, T6, T7, R>;
declare function coating<T1, T2, T3, T4, T5, T6, T7, T8, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => R, thisArgs?: any): Coating8<T1, T2, T3, T4, T5, T6, T7, T8, R>;
declare function coating<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => R, thisArgs?: any): Coating9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>;
declare function coating<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => R, thisArgs?: any): Coating10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>;
declare function coating<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11) => R, thisArgs?: any): Coating11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>;
declare function coating<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12) => R, thisArgs?: any): Coating12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>;
declare function coating<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13) => R, thisArgs?: any): Coating13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>;
declare function coating<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13, arg14: T14) => R, thisArgs?: any): Coating14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>;
declare function coating<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13, arg14: T14, arg15: T15) => R, thisArgs?: any): Coating15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>;
declare function coating<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13, arg14: T14, arg15: T15, arg16: T16) => R, thisArgs?: any): Coating16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>;
declare function coating(func: Function, thisArg?: any): Function;

export = coating;
