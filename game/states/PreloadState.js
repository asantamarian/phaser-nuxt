import "~/game/PhaserBridge";

class PreloadState extends Phaser.State {
  preload() {
    this.load.bitmapFont('carrier_command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
    this.load.image("sky", "assets/sky.png");
    this.load.image("ground", "assets/platform.png");
    this.load.image("star", "assets/star.png");
    this.load.spritesheet("dude", "assets/dude.png", 32, 48);
    this.load.audio('sfx', 'assets/audio/SoundEffects/fx_mixdown.ogg');
  }

  create() {
    console.log("PRELOAD");
    this.state.start("MainMenu");
  }
}

export default PreloadState;
