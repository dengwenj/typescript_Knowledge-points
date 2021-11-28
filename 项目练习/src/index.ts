import './style/index.less';

// 定义食物类
class Food {
    element: HTMLElement;
    constructor() {
        // 获取页面中的 food 元素并将其赋值给 element
        this.element = document.querySelector('.food')!;
    }

    // 定义一个获取食物的 x 轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 定义一个获取食物的 y 轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    //定义一个修改食物的位置
    changFood() {
        // 生成一个随机的位置
        // 食物的位置最小是 0 ，最大是 290
        // 蛇移动一次就是一格，一格的大小就是 10，所以要求食物的坐标要整 10
        // Math.round 四舍五入
        let top = Math.round(Math.random() * 29) * 10;
        this.element.style.left = top + 'px';
        this.element.style.top = top + 'px';
    }
}

const f = new Food();
console.log(f.X, f.Y);
f.changFood()
console.log(f.X, f.Y);
