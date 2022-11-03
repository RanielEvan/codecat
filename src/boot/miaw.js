import { boot } from "quasar/wrappers";

// CLASSE DO GATINHO
class Miaw {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.image = document.getElementById("miaw-sprite");
    this.spriteWidth = 400;
    this.spriteHeight = 200;
    this.width = this.spriteWidth;
    this.height = this.spriteHeight;
    this.scale = 0.45;
    this.x = this.canvasWidth / 2 - (this.width * this.scale) / 2; // Posição centralizada
    this.y = this.canvasHeight / 2 - (this.height * this.scale) / 2; // Posição centralizada

    this.frameX = 0; // Posição no spritesheet
    this.frameY = 0; // Posição no spritesheet
    this.startFrame = 0;
    this.endFrame = 11;
  }

  // Desenha
  draw(context) {
    context.drawImage(
      this.image, // Imagem
      this.frameX * this.spriteWidth,
      this.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight, // Origem
      this.x,
      this.y,
      this.width * this.scale,
      this.height * this.scale
    ); // Destino
  }

  // Atualiza
  update() {
    if (this.frameY < this.endFrame) this.frameY++;
    else this.frameY = this.startFrame;
  }

  // Determina qual animação irá executar de acordo com o Spritesheet
  changeInstance(instance) {
    switch (instance) {
      case "Walk":
        this.frameX = 0;
        this.startFrame = 0;
        this.endFrame = 11;
        break;
      case "ToIdle":
        this.frameX = 1;
        this.startFrame = 0;
        this.endFrame = 5;
        break;
      case "Idle":
        this.frameX = 1;
        this.startFrame = 5;
        this.endFrame = 5;
        break;
      case "Run":
        this.frameX = 3;
        this.startFrame = 0;
        this.endFrame = 12;
        break;
    }
  }
}

let miawObj = null;

export default boot(({ app }) => {
  // Adicionamos o Event Listener
  window.addEventListener("load", function () {
    const canvas = document.getElementById("theMiaw");
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 200;

    // Instancia
    const newMiaw = new Miaw(canvas.width, canvas.height);
    miawObj = newMiaw;

    // Externa o Miaw Globalmente para ser usado no Vue
    app.config.globalProperties.$miaw = newMiaw;

    function animate() {
      setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        newMiaw.draw(ctx);
        newMiaw.update();
        requestAnimationFrame(animate);
      }, 60);
    }
    animate();
  });
});

export { miawObj };
