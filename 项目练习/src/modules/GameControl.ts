import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

// 游戏控制器，控制其他的所有类
export default class GameControl {
    // 食物
    food: Food;
    scorePanel: ScorePanel;
    // 蛇
    snake: Snake;

    // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
    direction: string = '';

    constructor() {
        this.food = new Food;
        this.scorePanel = new ScorePanel;
        this.snake = new Snake;

        this.init()
    }

    // 初始化
    init() {
        document.addEventListener('keydown', this.keydowmHeader.bind(this));

        this.snakeRun()
    }

    keydowmHeader(e: KeyboardEvent) {
        this.direction = e.key;
        console.log(e.key);

    }

    snakeRun() {
        let x = this.snake.X;
        let y = this.snake.Y;

        switch (this.direction) {
            case 'ArrowUp':
                // 上
                y -= 10;
                break;
            case 'ArrowDown':
                //下
                y += 10;
                break;
            case 'ArrowLeft':
                // 左
                x -= 10;
                break;
            case 'ArrowRight':
                // 右
                x += 10;
                break;
        }

        this.snake.X = x;
        this.snake.Y = y;

        setTimeout(this.snakeRun.bind(this), 500 - (this.scorePanel.level - 1) * 50);
    };
}
