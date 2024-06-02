import { Player } from "../objects/player";

export class GameScene extends Phaser.Scene {
    private player: Player;
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
    }

    create(): void {
        this.player = new Player(this, 100, 450);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.scoreText = this.add.text(16, 16, `score: ${this.player.score}`, { fontSize: '32px', color: '#FFF' });
    }



    update(): void {
        if (this.cursors.up.isDown) {
            this.player.moveUp();
        }
        else if (this.cursors.down.isDown) {
            this.player.moveDown();
        }
        else if (this.cursors.right.isDown) {
            this.player.moveRight();
        }
        else if (this.cursors.left.isDown) {
            this.player.moveLeft();
        }
        else {
            this.player.idle();
        }
    }

}