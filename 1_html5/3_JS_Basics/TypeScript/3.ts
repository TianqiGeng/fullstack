//类
//public 默认都能被访问
//private 只能类里面用 
//protected 类里面和子类可以访问
//构造函数在类被实例化时调用
class Person {
    constructor(public name: string) {
        this.name = name;
        console.log("Person")
    }//没有public,this.name取不到
    // private name;
    private age;
    public eat() {
        console.log(this.name + "lunch");
    }
}
var p1 = new Person("a");
p1.eat();
var p2 = new Person("b");
p2.eat();
//继承 extend
//获得所有属性和方法
//super方法调用父构造器的方法
class bPerson extends Person {
    constructor(name: string, num: string) {
        super(name);
        console.log("bPerson")
        this.num = num;
    }
    num: string;
    work() {
        super.eat();
        this.doWork();
    }
    doWork() {
        console.log(this.name + "work");
    }
}
var p3 = new bPerson("p3", "1");
// p3.eat(); //直接调用父的方法
p3.work();

//泛型，限制集合内容
var workers: Array<Person> = [];
workers[0] = new Person("zhangsan");
workers[1] = new bPerson("lisi", "2");
// workers[0] = 2 //报错

//接口

interface cPerson {
    name: string;
    age: number;
}
class ccPerson {
    constructor(public config: cPerson) {

    }
}
//构造器里面使用cPerson类型，那新变量必须符合要求
//具有name和age属性
var p4 = new ccPerson({
    name: "zhangsan",
    age: 18,
})

interface dPerson {
    eat();
}
//实现接口必须实现eat方法
class ddPerson implements dPerson {
    eat() {
        console.log("ddPerson")
    }
}
class eePerson implements dPerson {
    eat() {
        console.log("eePerson")
    }
}

