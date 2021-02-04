import "~/game/PhaserBridge";
import audio from "~/game/objects/audio";
import playerHelper from "~/game/objects/player";
import starsHelper from "~/game/objects/stars";
var platforms, player, cursors, stars, fx;
var score = 0;
var scoreText = "";
function collectStar(player, star) {
  // Removes the star from the screen
  star.kill();
  score += 10;
  scoreText.text = "Score: " + score;
  fx.play("ping");
}
class GameState extends Phaser.State {
  create() {
    if (this.game.$settings.debug) {
      this.game.time.advancedTiming = true;
    }

    cursors = this.input.keyboard.createCursorKeys();
    //AUDIO
    fx = audio.INIT_AUDIO(this)

    this.add.sprite(0, 0, "star");
    this.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    this.add.sprite(0, 0, "sky");
    scoreText = this.add.bitmapText(16, 16, "carrier_command", "SCORE: 0", 34);
    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, this.world.height - 64, "ground");

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = platforms.create(400, 400, "ground");

    ledge.body.immovable = true;

    ledge = platforms.create(-150, 250, "ground");

    ledge.body.immovable = true;

    // The player and its settings
    player = playerHelper.new(this)

    stars = starsHelper.load(this);

    console.log("GAME");
  }
  update() {
    var hitPlatform = this.physics.arcade.collide(player, platforms);
    this.physics.arcade.collide(stars, platforms);
    this.physics.arcade.overlap(player, stars, collectStar, null, this);
    player.body.velocity.x = 0;

    if (cursors.left.isDown) {
      //  Move to the left
      player.body.velocity.x = -150;

      player.animations.play("left");
    } else if (cursors.right.isDown) {
      //  Move to the right
      player.body.velocity.x = 150;

      player.animations.play("right");
    } else {
      //  Stand still
      player.animations.stop();

      player.frame = 4;
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
      fx.play('jump')
      player.body.velocity.y = -350;
    }
  }
  render() {
    if (this.game.$settings.debug) {
      this.game.debug.text(
        "FPS: " + this.game.time.fps || "FPS: --",
        40,
        40,
        "#00ff00"
      );
    }
  }
}

export default GameState;
