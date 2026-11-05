import { Scene } from 'phaser';

export class Hello extends Scene {
  constructor() {
    super('Hello');
  }

  create(): void {
    const text = this.add
      .text(this.cameras.main.centerX, this.cameras.main.centerY, 'Hello, Phaser 4', {
        fontFamily: 'monospace',
        fontSize: 64,
        color: '#ffffff',
      })
      .setOrigin(0.5);

    this.tweens.add({
      targets: text,
      scale: 1.15,
      duration: 900,
      yoyo: true,
      repeat: -1,
    });
  }
}
