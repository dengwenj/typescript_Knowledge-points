(function () {
    // 描述一个对象的类型
    type myType = {
        name: string;
        age: number;
    };

    let mt: myType = {
        name: 'dengwj',
        age: 21
    };
    console.log(mt);

    /* 
        接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
            同时接口也可以当成类型声明去使用
    */
    interface myInterface {
        name: string;
        age: number;
        sex: string
    };
    let mi: myInterface = {
        name: 'weiwei',
        age: 17,
        sex: '女'
    };
    console.log(mi);

    /* 
        接口可以在定义类的时候去限制类的结构，
            接口中的所有的属性都不能有实际值
            接口只定义对象的结构，而不考虑实际值
                在接口中所有的方法都是抽象方法
    */
    interface myInter {
        name: string,
        age: number,
        sex: string,

        sayHello(): void
    };

    /* 
        定义类时，可以使类去实现一个接口
            实现接口就是使类满足接口的要求
    */
    class Dwj implements myInter {
        name: string;
        age: number;
        sex: string;
        constructor(name: string, age: number, sex: string) {
            this.name = name;
            this.age = age;
            this.sex = sex;
        }

        sayHello() { };
    }
    const d = new Dwj('dwj', 21, '男')
    console.log(d);
})()