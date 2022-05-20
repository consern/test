import { AcGameObject } from "/static/js/ac_game_object/base.js";

export class Player extends AcGameObject {
    constructor(root, info) {
        super();

        this.root = root;

        this.id = info.id;
        this.x = info.x;
        this.y = info.y;
        this.width = info.width;
        this.height = info.height;
        this.color = info.color;

        this.vx = 0; 
        this.vy = 0;

        this.speedx = 400;  //水平速度
        this.speedy = 1000; //跳起初始速度

        this.ctx = this.root.game_map.ctx;
    }

    start() {}

    update() {
        this.render();
    }

    render() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);

    }
}