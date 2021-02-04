var init = (game) =>{
    let fx = game.add.audio("sfx");
    fx.allowMultiple = true;

    //	And this defines the markers.

    //	They consist of a key (for replaying), the time the sound starts and the duration, both given in seconds.
    //	You can also set the volume and loop state, although we don't use them in this example (see the docs)

    fx.addMarker("alien death", 1, 1.0);
    fx.addMarker("boss hit", 3, 0.5);
    fx.addMarker("escape", 4, 3.2);
    fx.addMarker("meow", 8, 0.5);
    fx.addMarker("numkey", 9, 0.1);
    fx.addMarker("ping", 10, 1.0);
    fx.addMarker("death", 12, 4.2);
    fx.addMarker("shot", 17, 1.0);
    fx.addMarker("jump", 19, 0.3);
    return fx;
}
export default{
  INIT_AUDIO:init
}
