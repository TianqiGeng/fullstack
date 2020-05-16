var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//类
//public 默认都能被访问
//private 只能类里面用 
//protected 类里面和子类可以访问
//构造函数在类被实例化时调用
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.name = name;
        console.log("Person");
    } //没有public,this.name取不到
    Person.prototype.eat = function () {
        console.log(this.name + "lunch");
    };
    return Person;
}());
var p1 = new Person("a");
p1.eat();
var p2 = new Person("b");
p2.eat();
//继承 extend
//获得所有属性和方法
//super方法调用父构造器的方法
var bPerson = /** @class */ (function (_super) {
    __extends(bPerson, _super);
    function bPerson(name, num) {
        var _this = _super.call(this, name) || this;
        console.log("bPerson");
        _this.num = num;
        return _this;
    }
    bPerson.prototype.work = function () {
        _super.prototype.eat.call(this);
        this.doWork();
    };
    bPerson.prototype.doWork = function () {
        console.log(this.name + "work");
    };
    return bPerson;
}(Person));
var p3 = new bPerson("p3", "1");
// p3.eat(); //直接调用父的方法
p3.work();
