// object 类型 在开发中一般不用
var a;
a = function () { };
a = [1, 2];
// {} 用来指定对象中可以包含哪些属性，语法：{属性名:属性值}
var b;
b = { name: 'dwj', age: 21 }; // 必须写这两个，类型也要写对
// 在属性名后面夹 ？ ，表示属性是可选的
var c;
// c = { name: 'xd', age: 12 };
c = { name: 'xd' };
// [propName: string]: any 任意类型的属性
var d; // 表示在后面都可以写什么类型都可以
d = { name: 'jj', sex: '男', hobby: ['睡觉', '再睡觉'] };
// 设置函数结构的类型声明 (a: number, b: number) => number
var e;
e = function (c, d) {
    return c + d;
};
// 数组的类型声明：string[]   Array<number>
var f;
f = ['d', 'w', 'j'];
var g;
g = [1, 2, 3];
// tuple,元组，元组就是固定长度的数组,顺序也不能变
var h;
h = [1, 'dwj', true, ['d', 'w', 'j']];
// enum 枚举 就是把我们可能的情况一个一个列出来
var Sex;
(function (Sex) {
    Sex[Sex["nan"] = 0] = "nan";
    Sex[Sex["nv"] = 1] = "nv";
})(Sex || (Sex = {}));
var i;
i = { name: 'dwj', sex: Sex.nan };
console.log(i.sex === Sex.nan ? '男' : '女');
var s;
var p;
var k;
s = 2;
p = 4;
k = 1;
// & 且的意思 表示同时
var y;
y = { name: 'dwj', age: 21 };
