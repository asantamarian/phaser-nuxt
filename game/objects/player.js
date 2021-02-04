var create = (game) =>{
  var player = game.add.sprite(32, game.world.height - 150, "dude");

  //  We need to enable physics on the player
  game.physics.arcade.enable(player);

  //  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = 0.1;
  player.body.gravity.y = 350;
  player.body.collideWorldBounds = true;

  //  Our two animations, walking left and right.
  player.animations.add("left", [0, 1, 2, 3], 10, true);
  player.animations.add("right", [5, 6, 7, 8], 10, true);
  return player;
}

export default{
  new:create
}
