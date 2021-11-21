// 也可以直接使用字面量进行类型声明
var a;
a = 10;
// 可以使用 ｜ 来连接多个类型（联合类型）
var b;
b = 11;
b = 'zifuchuan';
var c;
c = true;
c = '1';
c = 1;
// any 表示任意类型的值，一个变量设置类型为 any 后相当于对该变量关闭了 ts 对类型检测
var dwj = true;
dwj = '11';
dwj = 11;
dwj = true;
var s;
s = 'st';
s = dwj; // 会祸害 s 的类型
// unknown 未知类型的值
var dengwenj;
dengwenj = 33;
if (typeof dengwenj === 'string') {
    s = dengwenj;
}
// 类型断言，可以用来告诉解析器变量的实际类型
// 语法：
//     1、变量 as 类型    2、<类型>变量
s = dengwenj; // dengwenj 这个类型是 string
s = dengwenj; // 这个也可以
// void 类型 表示空的（undefined），以函数为例，就表示没有返回值的函数
function fn(num) {
    // return 11 // 不能将类型“number”分配给类型“void”。
}
// never 表示永远不会返回结果
function f() {
    throw new Error('表示永远不会返回结果');
}
