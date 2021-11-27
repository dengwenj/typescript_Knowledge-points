class Person1 {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    sayHello1(say: string) {
        console.log(say);
    }
}

class Dwj1 extends Person1 {

}
const d = new Dwj1('dengwenjie', 21)
d.sayHello1('ss')