//对变量进行类型声明时，如果是先声明在赋值,可以写类型
let a: number;

a = 1;

// 如果同时声明和赋值，可以不用写类型， ts 会自动去判断
let falg = true;

// ts 中函数写类型
function fn(a: number, b: number): number {
    return a + b;
}
const f = fn(1, 2);
