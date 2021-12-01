class Snake {
    element: HTMLElement;
    // 表示蛇头的元素
    head: HTMLElement;
    // 表示蛇的身体（全部）
    bodies: HTMLCollection;

    constructor() {
        this.element = document.querySelector('.snake')!;
        this.head = <HTMLElement>document.querySelector('.snake > div');
        this.bodies = this.element.getElementsByTagName('div');
    }

    // 获取蛇的坐标
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value) {
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了');
        }
        this.head.style.left = value + 'px';
    }

    set Y(value) {
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了');
        }
        this.head.style.top = value + 'px'
    }

    // 蛇增加身体的方法
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }
}
export default Snake;