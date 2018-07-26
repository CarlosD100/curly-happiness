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

game.scene.add("lv1", Play({
  npcs: [
    {
      x: 350,
      y: 300,
      image: "Person8",
      data: "Mr. Green",
      animation: "wave8"
    },
    {
      x: 200,
      y: 200,
      image: "Person9",
      data: "I am still mr lemon",
      animation: "wave9"
    },
    {
      x: 500,
      y: 500,
      image: "Person2",
      data: "I am not mr lemon",
      animation: "wave2"
    },
    {
      x: 600,
      y: 500,
      image: "Person1",
      data: "Hello",
      animation: "wave1"
    },
  ],
  portals: [
    {
      x: 400,
      y: 300,
      image: "plant",
      location: "lv2"
    }
  ]
}));

game.scene.add("lv2", Play({
  npcs: [
    {
      x: 600,
      y: 500,
      image: "Person3",
      data: "Hello",
      animation: "wave3"
    },
    {
      x: 100,
      y: 100,
      image: "Person4",
      data: "Hello",
      animation: "wave4"
    },
    {
      x: 150,
      y: 500,
      image: "Person6",
      data: "Hello",
      animation: "wave6"
    },
    {
      x: 200,
      y: 200,
      image: "Person7",
      data: "Hello",
      animation: "wave7"
    },
  ],
  portals: [
    {
      x: 400,
      y: 300,
      image: "plant",
      location: "lv1"
    }
  ]
}))

game.scene.start("lv1");
