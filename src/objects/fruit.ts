const FRUIT_TEXTURE = 'orange';
export class Fruit extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'orange');
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);

        this.scene.anims.create({
            key: 'fruit',
            frames: this.anims.generateFrameNumbers(FRUIT_TEXTURE, { start: 0, end: 1 }),
            frameRate: 2,
            repeat: -1
        });
        this.anims.play('fruit', true);
    }


    eaten() {
        this.destroy();
    }
}
