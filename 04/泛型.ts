(function () {
    // 在定义函数或者类时，如果遇到类型不明确就可以使用泛型
    function fn<T>(a: T): T {
        return a
    }
    // 可以直接调用具有泛型的函数
    let res1 = fn(1); // 不指定泛型，ts 可以自动对类型进行推断
    let res2 = fn<string>('dwj') // 指定泛型
    console.log(res1);
    console.log(res2);

    // 泛型可以同时指定多个
    function fn2<T, K>(a: T, b: K): T {
        return a;
    }
    let res3 = fn2<object, string>({ name: 'dwj' }, 'dwj')
    console.log(res3);

    interface myInterface {
        length: number;
    }
    // T extends myInterface 表示泛型 T 必须是 myInterface 实现类（子类）
    function fn3<T extends myInterface>(a: T): number {
        return a.length
    }
    let res4 = fn3('12')
    console.log(res4 + 'hh');

    // 类中
    class myClass<T>{
        name: T;
        constructor(name: T) {
            this.name = name
        }
    }
    const m = new myClass<string>('dwj')
})()