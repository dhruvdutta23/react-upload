"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar)
                    ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
function someName(a, b) {
    return a + b;
}
console.log(someName(2, 2));
console.log("hi");
var a;
a = 12;
var b;
b = true;
var c;
var d;
var dc;
dc = [{
        name: 'dhruba',
        age: 12
    }];
var func = function (arr, val) {
    return __spreadArray([val], arr, true);
};
var res = func(['1,2,3,4', 'dhdhb'], 'some');
//res[0].split()
var ap = function (b, a) {
    return __spreadArray([a], b, true);
};
var store = ap([123, 20], 290);
console.log(store);
