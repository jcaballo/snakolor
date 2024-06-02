
const PLAYER_TEXTURE = 'snake';

export class Player extends Phaser.Physics.Arcade.Sprite {

    body: Phaser.Physics.Arcade.Body;
    score = 0;
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, PLAYER_TEXTURE);
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
        this.setBounce(0.2);
        this.setCollideWorldBounds(true);

        this.scene.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers(PLAYER_TEXTURE, { start: 0, end: 1 }),
            frameRate: 2,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers(PLAYER_TEXTURE, { start: 2, end: 3 }),
            frameRate: 2,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers(PLAYER_TEXTURE, { start: 4, end: 5 }),
            frameRate: 2,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers(PLAYER_TEXTURE, { start: 6, end: 7 }),
            frameRate: 2,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(PLAYER_TEXTURE, { start: 8, end: 9 }),
            frameRate: 2,
            repeat: -1
        });
    }

    idle(): void {
        this.setVelocityX(0);
        this.setVelocityY(0);
        this.anims.play('idle', true);
    }

    moveUp(): void {
        this.setVelocityX(0);
        this.setVelocityY(-160);
        this.anims.play('up', true);
    }

    moveDown(): void {
        this.setVelocityX(0);
        this.setVelocityY(160);
        this.anims.play('down', true);
    }

    moveLeft(): void {
        this.setVelocityX(-160);
        this.setVelocityY(0);
        this.anims.play('left', true);
    }

    moveRight(): void {
        this.setVelocityX(160);
        this.setVelocityY(0);
        this.anims.play('right', true);
    }

    jump(): void {
        this.setVelocityY(-500);
    }
}