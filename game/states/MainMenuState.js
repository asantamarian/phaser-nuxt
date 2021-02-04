import "~/game/PhaserBridge";
var bmpText;
class MainMenuState extends Phaser.State {
  create() {
    this.spacebar = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    bmpText = this.add.bitmapText(
      100,
      100,
      "carrier_command",
      "Presiona espacio!",
      34
    );

    bmpText.inputEnabled = true;

    bmpText.input.enableDrag();

    console.log("MAINMENU");
  }

  update() {
    if (this.spacebar.isDown) {
      this.StartGame();
    }
  }

  StartGame() {
    this.state.start("Game");
  }
}

export default MainMenuState;
