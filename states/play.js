const playerSpeed = 300;

export default class Play {
  init() {
    this.player = undefined;
    this.npcs = undefined;
    this.keys = undefined;

    this.textShowing = null;
    this.text = undefined;
  }
  preload() {
    this.load.image("lemon", "./assets/lemon.jpg");
  }
  create() {
    this.player = this.physics.add.sprite(50, 50, "lemon");
    this.player.setCollideWorldBounds(true);

    this.keys = this.input.keyboard.addKeys({
      W: Phaser.Input.Keyboard.KeyCodes.W,
      A: Phaser.Input.Keyboard.KeyCodes.A,
      S: Phaser.Input.Keyboard.KeyCodes.S,
      D: Phaser.Input.Keyboard.KeyCodes.D,
      Right: Phaser.Input.Keyboard.KeyCodes.RIGHT,

      SPACE: Phaser.Input.Keyboard.KeyCodes.SPACE
    });

    this.npcs = this.physics.add.staticGroup();

    this.npcs.create(200, 200, "lemon").setData("text", "Hello, I am a lemon");

    this.npcs
      .create(400, 400, "lemon")
      .setData("text", "Hello, I am also lemon");

    this.text = this.add.text(400, 500, "", {
      color: "white"
    });
    this.text.setOrigin(0.5);
  }
  update() {
    if (this.textShowing === null) {
      this.text.setText("");
    } else {
      this.text.setText(this.textShowing);
    }

    if (this.keys.W.isDown) {
      this.player.setVelocityY(-playerSpeed);
    } else if (this.keys.S.isDown) {
      this.player.setVelocityY(playerSpeed);
    } else {
      this.player.setVelocityY(0);
    }

    if (this.keys.A.isDown) {
      this.player.setVelocityX(-playerSpeed);
    } else if (this.keys.D.isDown) {
      this.player.setVelocityX(playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }

    this.textShowing = null;

    this.physics.overlap(this.player, this.npcs, (player, npc) => {
      this.textShowing = npc.getData("text");
    });
  }
}
