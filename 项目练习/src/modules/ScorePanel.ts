export default class ScorePanel {
    // 分数
    score = 0;
    // 等级
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    // 分数达到多个了就升一级
    scoreUp: number;
    // 等级上限
    levelUp: number;

    constructor(scoreUp: number = 10, levelUp: number = 10) {
        this.scoreEle = document.querySelector('#score')!;
        this.levelEle = document.querySelector('#level')!;

        this.scoreUp = scoreUp;
        this.levelUp = levelUp;
    };

    // 加分数
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        if (this.score % this.scoreUp === 0) {
            this.addLevel()
        }
    }

    // 等级加
    addLevel() {
        if (this.level < this.levelUp) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}



