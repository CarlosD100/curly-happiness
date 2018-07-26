const playerSpeed = 300;

export default config => class Play {
  init() {
    this.player = undefined;
    this.npcs = undefined;
    this.portals = undefined;

    this.keys = undefined;

    this.textShowing = null;
    this.text = undefined;
  }
  preload() {
    this.load.image("plant", "./assets/Plant1.png");
    this.load.spritesheet("Person1", "./assets/Person1.png", { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet("Person2", "./assets/Person2.png", { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet("Person3", "./assets/Person3.png", { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet("Person4", "./assets/Person4.png", { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet("Person5", "./assets/Person5.png", { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet("Person6", "./assets/Person6.png", { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet("Person7", "./assets/Person7.png", { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet("Person8", "./assets/Person8.png", { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet("Person9", "./assets/Person9.png", { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet("Person10", "./assets/Person10.png", { frameWidth: 32, frameHeight: 32 });



  }
  create() {
    this.player = this.physics.add.sprite(50, 50, "Person5");
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: "wave1",
      frames: this.anims.generateFrameNumbers("Person1", { start: 0, end: 1}),
      frameRate: 10,
      repeat: -1
    })
    
    this.anims.create({
      key: "wave2",
      frames: this.anims.generateFrameNumbers("Person2", { start: 0, end: 1}),
      frameRate: 10,
      repeat: -1
    })
    
    this.anims.create({
      key: "wave3",
      frames: this.anims.generateFrameNumbers("Person3", { start: 0, end: 0}),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: "wave4",
      frames: this.anims.generateFrameNumbers("Person4", { start: 0, end: 1}),
      frameRate: 10,
      repeat: -1
    })
    
    this.anims.create({
      key: "wave5",
      frames: this.anims.generateFrameNumbers("Person5", { start: 0, end: 0}),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: "wave6",
      frames: this.anims.generateFrameNumbers("Person6", { start: 0, end: 1}),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: "wave7",
      frames: this.anims.generateFrameNumbers("Person7", { start: 0, end: 1}),
      frameRate: 10,
      repeat: -1
    })
    
    this.anims.create({
      key: "wave8",
      frames: this.anims.generateFrameNumbers("Person8", { start: 0, end: 1}),
      frameRate: 10,
      repeat: -1
    })
    
    this.anims.create({
      key: "wave9",
      frames: this.anims.generateFrameNumbers("Person9", { start: 0, end: 1}),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: "wave10",
      frames: this.anims.generateFrameNumbers("Person10", { start: 0, end: 1}),
      frameRate: 10,
      repeat: -1
    })
    
    this.keys = this.input.keyboard.addKeys({
      W: Phaser.Input.Keyboard.KeyCodes.W,
      A: Phaser.Input.Keyboard.KeyCodes.A,
      S: Phaser.Input.Keyboard.KeyCodes.S,
      D: Phaser.Input.Keyboard.KeyCodes.D,

      SPACE: Phaser.Input.Keyboard.KeyCodes.SPACE
    });

    this.npcs = this.physics.add.staticGroup();

    (config.npcs || []).forEach(c => {
      const npc = this.npcs.create(c.x, c.y, c.image);
      npc.setData("text", c.data);
      npc.anims.play(c.animation);
    })

    this.portals = this.physics.add.staticGroup();

    (config.portals || []).forEach(c => {
      const portal = this.portals.create(c.x, c.y, c.image);
      portal.setData("location", c.location);
    })

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


    this.player.anims.play("wave1", true)

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

    this.physics.overlap(this.player, this.portals, (player, portal) => {
      this.scene.start(portal.getData("location"))
    });
  }
}
