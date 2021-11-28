(function () {
    /* 
        public 修饰的属性可以在任意位置访问（修改）默认值
        private 私有属性，私有属性只能在类内部进行访问（修改）
                通过在类中添加方法使得私有属性可以被外部访问
        protected 受保护的属性，只能在当前类和当前的子类中修改（访问）
    */
    class Person {
        private _name: string
        private _age: number
        constructor(name: string, age: number) {
            this._name = name
            this._age = age;
        }

        get name() {
            console.log('被调用了');

            return this._name
        }

        set name(value: string) {
            this._name = value
        }

        get age() {
            return this._age
        }

        set age(value: number) {
            if (value >= 0) this._age = value
        }
    }
    const p = new Person('dwj', 21)
    p.name = 'hh'
    console.log(p.name);
    p.age = -1
    console.log(p);

    class A {
        protected name: string;
        protected age: number;
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    class B extends A {
        say() {
            console.log(this.name);
        }
    }
    const a = new A('dwj', 21)
    // a.name // 不能这样用 要在 A 或者 A 的子类中用


    // class C {
    //     name: string
    //     age: number
    //     constructor(name: string, age: number) {
    //         this.name = name
    //         this.age = age
    //     }
    // }
    // 这是个语法糖
    class C {
        // 可以直接将属性定义在构造函数中
        constructor(public name: string, public age: number) { }
    }
    const c = new C('weiwei', 17)
    console.log(c);
})()