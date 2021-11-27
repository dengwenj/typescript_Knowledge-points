abstract class Person2 {
    // 抽象类不能用来创建对象，抽象类专门用来被继承的
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    // 抽象方法，不写方法体，子类必须要重写，只能定义在抽象类中
    abstract sayHello2(): void
}

class Dwj2 extends Person2 {
    sex: string;

    constructor(name: string, age: number, sex: string) {
        super(name, age);
        this.sex = sex
    }

    sayHello2() {
        console.log('hh');

    }
}
const d1 = new Dwj2('dwj', 21, '男')
console.log(d1);
