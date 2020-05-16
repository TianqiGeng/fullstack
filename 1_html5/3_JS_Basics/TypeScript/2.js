var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
//多行字符串,使用反引号
var content = "aaa" + "bbb";
var content = "aaa\nbbb\nccc";
//字符串模板
var myname = "Tina";
var getName = function () {
    return "TT";
};
console.log("hello " + myname);
console.log("hello " + getName());
console.log("<div> <span>" + myname + "<span>\n<span>" + getName() + "<span>\n<div>");
//自动拆分字符串
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myname = "Tina";
var getAge = function () {
    return 22;
};
test(__makeTemplateObject(["hello my name is ", ",", ""], ["hello my name is ", ",", ""]), myname, getAge());
//参数
var myname2 = "Tina";
// myname2 = 13;
var myname3 = "Tina";
// myname3=13; //报错，根据第一次赋值推断类型
var myname4 = "Tina"; //any类型不影响
myname4 = 14;
var myage = 13;
var woman = true;
//void 意味着不要返回值，下面写法错误
// function test(): void {
//     return "";
// }
function test2(name) {
    return name;
}
//自定义类型,可以通过class或者接口
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var zhangsan = new Person();
zhangsan.name = "zhang san";
zhangsan.age = 18;
//参数默认值
function test3(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
test3("xxx", "yyy", "zzz");
// test3("xxx", "yyy"); 参数不够会报错
function test4(a, b, c) {
    if (c === void 0) { c = "Tina"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
//默认c是Tina,默认值参数必须后面
test4("xxx", "yyy");
function test5(c, a, b) {
    if (c === void 0) { c = "Tina"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
//test5("xxx", "yyy");//xxx会赋值给c，b没有赋值，会报错
//可选参数？
function test6(a, b, c) {
    if (c === void 0) { c = "Tina"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test6("xxx");
function test7(a, b, c) {
    if (c === void 0) { c = "Tina"; }
    console.log(a);
    console.log(b.length);
    console.log(c);
}
//对b进行了处理，如果不传入b，会报错
//可选参数必须放在必选参数后边
//Rest + Spread
//...args表示可以传任意参数
function func1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
func1(1, 2, 3);
func1(7, 8, 9, 123);
//固定参数，输入多个参数，只截取固定数目
//会报错
// function func2(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// var args1 = [1, 2];
// var args2 = [7, 8, 9, 123];
// func2(...args1) //输出1，2，undefined
// func2(...args2);//输出7，8，9
//generator
//function*
// function* doSomething() {
//     console.log("start");
//     yield;
//     console.log("finish");
// }
// var funcdo = doSomething();
// funcdo.next();
// funcdo.next();
//destrucring
//数组里面拆分取值
var array = [1, 2, 3, 4];
var n1 = array[0], n4 = array[3];
console.log(n1);
console.log(n4);
var n1 = array[0], n2 = array[1], other = array[3];
console.log(other); //[3,4]
function doSomething2(_a) {
    var n1 = _a[0], n2 = _a[1], other = _a.slice(2);
    console.log(n1);
    console.log(n2);
    console.log(other);
}
console.log("array");
// doSomething2(array); //输出 1,2,[3,4]
//从对象里面拆分取值
function getFood() {
    return {
        kind: "noodle",
        price: 100,
        code: {
            c1: 222,
            c2: 555
        }
    };
}
console.log("object ");
var food = getFood();
console.log(food.kind, food.price);
//ES6新写法
var _a = getFood(), kind = _a.kind, price = _a.price;
console.log(kind + price);
//别名
var _b = getFood(), kind2 = _b.kind, price = _b.price;
console.log(kind2 + price);
//嵌套
var _c = getFood(), kind2 = _c.kind, price = _c.price, c1 = _c.code.c1;
//箭头函数
//没有参数
var sum1 = function () { };
//一个参数
var sum2 = function (arg1) {
    console.log(arg1);
};
//单行
var sum3 = function (arg1, arg2) { return arg1 + arg2; };
//多行
var sum4 = function (arg1, arg2) {
    var sum = 99;
    sum = arg1 + arg2;
    return sum;
};
var myarray = [1, 2, 3, 4];
console.log(myarray.filter(function (value) { return value % 2 == 0; }));
//消除this指针问题
function getThisName(name) {
    this.name = name;
    setInterval(function () {
        console.log("this.name=" + this.name);
    }, 1000);
}
var thisname = new getThisName("aaa"); //输出this.name=undefined
function getThisName2(name) {
    var _this = this;
    this.name = name;
    setInterval(function () {
        console.log("this.name=" + _this.name);
    }, 1000);
}
var thisname2 = new getThisName2("aaa"); //输出this.name=aaa
//循环
var myarray2 = [1, 2, 3, 4];
// myarray2.desc = "aaa";
//循环数组
//forEach()
myarray2.forEach(function (value) { return console.log(value); }); //输出1,2,3,4
//for in
for (var n in myarray2) {
    console.log(n); //输出键值对里面的key 0,1,2,3,desc
    console.log(myarray2[n]); //输出键值对里面的value 1,2,3,4,aaa
}
//for of,集合,数组,map,对象
for (var _i = 0, myarray2_1 = myarray2; _i < myarray2_1.length; _i++) {
    var n2 = myarray2_1[_i];
    console.log(n2); //输出1,2,3,4
}
for (var _d = 0, myarray2_2 = myarray2; _d < myarray2_2.length; _d++) {
    var n3 = myarray2_2[_d];
    if (n3 > 2)
        break;
    console.log(n3); //输出1,2
}
for (var _e = 0, _f = "string"; _e < _f.length; _e++) {
    var n = _f[_e];
    console.log(n); //string
}
