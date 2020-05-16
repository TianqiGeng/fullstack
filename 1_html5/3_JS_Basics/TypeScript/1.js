"use strict";
exports.__esModule = true;
exports.Hello = void 0;
var Hello = /** @class */ (function () {
    function Hello() {
    }
    return Hello;
}());
exports.Hello = Hello;
function foo(a) {
    return a + 1;
}
foo.bar = 123;
console.log(foo(foo.bar));
var ab = { a: 1, b: 1 };
console.log(ab); //{a:1,b:1}
var ab2 = { a: 1, b: 1 };
console.log(ab2); //{a:1,b:1}
