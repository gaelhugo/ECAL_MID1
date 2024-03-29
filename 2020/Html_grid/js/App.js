class App {
  constructor() {
    this.grid = new Grid();
    //
    // lettre A could be any class with a canvas
    // we just need a container (layer1)
    const layer1 = this.grid.cases[0];
    this.lettreA = new LettreA(layer1);
    const layer2 = this.grid.cases[1];
    this.letterP5 = new LettreP5(layer2);
    const layer3 = this.grid.cases[2];
    this.lettrePaper = new LettrePaper(layer3);
    const layer4 = this.grid.cases[3];
    this.letterP5_2 = new LettreP5(layer4);

    this.setup();
  }

  setup() {
    this.draw();
  }

  draw() {
    
    this.lettreA.update();
    this.lettreA.draw();

    this.letterP5.update();
    this.letterP5.draw();

    this.lettrePaper.update();
    this.lettrePaper.draw();

    this.letterP5_2.update();
    this.letterP5_2.draw();

    requestAnimationFrame(this.draw.bind(this));
  }
}

window.onload = function() {
  new App();
}
// force p5
// function setup() {}