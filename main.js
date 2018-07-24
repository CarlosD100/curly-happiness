import Play from "./states/play.js";

console.log("Game Booted");

const game = new Phaser.Game({
  pixelArt: true,
  width: 800,
  height: 600,
  physics: {
    default: "arcade"
  }
});

game.scene.add("play", Play);

game.scene.start("play");
