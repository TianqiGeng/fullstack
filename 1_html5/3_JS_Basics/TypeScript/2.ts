//多行字符串,使用反引号
var content = "aaa" + "bbb";
var content = `aaa
bbb
ccc`;
//字符串模板
var myname = "Tina";
var getName = function () {
    return "TT"
}
console.log(`hello ${myname}`);
console.log(`hello ${getName()}`)
console.log(`<div> <span>${myname}<span>
<span>${getName()}<span>
<div>`)
//自动拆分字符串
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myname = "Tina";
var getAge = function () {
    return 22;
}
test`hello my name is ${myname},${getAge()}`;

//参数
var myname2: string = "Tina";
// myname2 = 13;
var myname3 = "Tina";
// myname3=13; //报错，根据第一次赋值推断类型
var myname4: any = "Tina";//any类型不影响
myname4 = 14;

var myage: number = 13;
var woman: boolean = true;
//void 意味着不要返回值，下面写法错误
// function test(): void {
//     return "";
// }
function test2(name: string): string {
    return name;
}
//自定义类型,可以通过class或者接口
class Person {
    name: string;
    age: number;
}
var zhangsan: Person = new Person();
zhangsan.name = "zhang san";
zhangsan.age = 18;

//参数默认值
function test3(a: string, b: string, c: string) {
    console.log(a);
    console.log(b);
    console.log(c);
}
test3("xxx", "yyy", "zzz");
// test3("xxx", "yyy"); 参数不够会报错

function test4(a: string, b: string, c: string = "Tina") {
    console.log(a);
    console.log(b);
    console.log(c);
}
//默认c是Tina,默认值参数必须后面
test4("xxx", "yyy");

function test5(c: string = "Tina", a: string, b: string) {
    console.log(a);
    console.log(b);
    console.log(c);
}
//test5("xxx", "yyy");//xxx会赋值给c，b没有赋值，会报错

//可选参数？
function test6(a: string, b?: string, c: string = "Tina") {
    console.log(a);
    console.log(b);
    console.log(c);
}
test6("xxx");

function test7(a: string, b?: string, c: string = "Tina") {
    console.log(a);
    console.log(b.length);
    console.log(c);
}
//对b进行了处理，如果不传入b，会报错
//可选参数必须放在必选参数后边

//Rest + Spread
//...args表示可以传任意参数
function func1(...args) {
    args.forEach(function (arg) {
        console.log(arg);
    })
}
func1(1, 2, 3);
func1(7, 8, 9, 123)

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
var [n1, , , n4] = array;
console.log(n1);
console.log(n4);
var [n1, n2, , other] = array;
console.log(other);//[3,4]
function doSomething2([n1, n2, ...other]) {
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
    }
}
console.log("object ");
var food = getFood();
console.log(food.kind, food.price);
//ES6新写法
var { kind, price } = getFood();
console.log(kind + price);
//别名
var { kind: kind2, price } = getFood();
console.log(kind2 + price);
//嵌套
var { kind: kind2, price, code: { c1 } } = getFood();

//箭头函数
//没有参数
var sum1 = () => { }
//一个参数
var sum2 = arg1 => {
    console.log(arg1);
}
//单行
var sum3 = (arg1, arg2) => arg1 + arg2;
//多行
var sum4 = (arg1, arg2) => {
    var sum = 99;
    sum = arg1 + arg2;
    return sum;
};

var myarray = [1, 2, 3, 4]
console.log(myarray.filter(value => value % 2 == 0));

//消除this指针问题
function getThisName(name: string) {
    this.name = name;
    setInterval(function () {
        console.log("this.name=" + this.name);
    }, 1000);
}
var thisname = new getThisName("aaa");//输出this.name=undefined

function getThisName2(name: string) {
    this.name = name;
    setInterval(() => {
        console.log("this.name=" + this.name);
    }, 1000);
}
var thisname2 = new getThisName2("aaa");//输出this.name=aaa

//循环
var myarray2 = [1, 2, 3, 4];
myarray2.desc = "aaa";
//循环数组
//forEach()
myarray2.forEach(value => console.log(value))//输出1,2,3,4
//for in
for (var n in myarray2) {
    console.log(n); //输出键值对里面的key 0,1,2,3,desc
    console.log(myarray2[n]); //输出键值对里面的value 1,2,3,4,aaa
}
//for of,集合,数组,map,对象
for (var n2 of myarray2) {
    console.log(n2);//输出1,2,3,4
}
for (var n3 of myarray2) {
    if (n3 > 2) break;
    console.log(n3);//输出1,2
}

for (var n of "string") {
    console.log(n);//string
}







