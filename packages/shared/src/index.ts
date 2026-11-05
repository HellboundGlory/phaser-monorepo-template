import { AUTO, Game, Scale } from 'phaser';

export function createGame(
  parent: string,
  scenes: Phaser.Types.Scenes.SceneType[],
  options: { width?: number; height?: number; backgroundColor?: string; pixelArt?: boolean } = {},
): Phaser.Game {
  return new Game({
    type: AUTO,
    parent,
    width: options.width ?? 1280,
    height: options.height ?? 720,
    backgroundColor: options.backgroundColor ?? '#000000',
    pixelArt: options.pixelArt ?? false,
    scale: {
      mode: Scale.FIT,
      autoCenter: Scale.CENTER_BOTH,
    },
    scene: scenes,
  });
}
