import { Player } from "../objects/player";
import {Fruit} from "../objects/fruit";

const MAX_FRUITS = 10;
export class GameScene extends Phaser.Scene {
    private player: Player;
    private fruits: Fruit[] = [];
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    private scoreText: Phaser.GameObjects.Text;
    constructor() {
        super({ key: 'GameScene' });
    }

    preload(): void {
        this.load.spritesheet('snake',
            'images/snake.png',
            { frameWidth: 32, frameHeight: 32 }
        );
        this.load.spritesheet('orange',
            'images/orange.png',
            { frameWidth: 16, frameHeight: 16 }
        );
    }

    create(): void {
        this.player = new Player(this, 100, 450);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.scoreText = this.add.text(16, 16, `score: ${this.player.score}`, { fontSize: '32px', color: '#FFF' });
    }



    update(): void {
        this.checkPlayerMoves();
        this.spawnFruits();
    }

    private checkPlayerMoves() {
        if (this.cursors.up.isDown) {
            this.player.moveUp();
        } else if (this.cursors.down.isDown) {
            this.player.moveDown();
        } else if (this.cursors.right.isDown) {
            this.player.moveRight();
        } else if (this.cursors.left.isDown) {
            this.player.moveLeft();
        } else {
            this.player.idle();
        }
    }

    private spawnFruits() {
        if(this.fruits.length < MAX_FRUITS){
            const x = Phaser.Math.Between(16, this.game.config.width as number);
            const y = Phaser.Math.Between(16, this.game.config.height as number);
            this.fruits.push(new Fruit(this, x, y));
        }
    }
}
