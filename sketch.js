let particle = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("rgba(0,0,0,0.05)");
  for (let i = 0; i < particle.length; i++) {
    particle[i].update();
    particle[i].display();
  }
}

// ---------------------------------
// ------- mouseCliked -------------
// ---------------------------------

function mouseClicked() {
  for (let i = 0; i < 100; i++) {
    let newParticle = new RandomWalker(mouseX, mouseY);
    particle.push(newParticle);
  }
}

// ---------------------------------
// ------------- Class -------------
// ---------------------------------

class RandomWalker {

  constructor(_mouseX, _mouseY) {
    this.red = random(200, 255);
    this.green = random(150, 200);
    this.blue = random(100, 255);
    this.diameter = random(10, 15);
    this.strokeColor = 255;
    this.t = 1;
    this.noiseShift = 100;
    this.pos = createVector(_mouseX, _mouseY);
    this.speed = createVector(random(10), random(13));
    this.history = [];
  }

  update() {
    this.speed.rotate(map(noise(this.t + this.noiseShift), 0, 1, - HALF_PI / 30, HALF_PI / 18));
    this.t += 0.3;
    this.history.push(this.pos);
    this.pos.add(this.speed);
    if (this.history.length > 20) {
      this.history.splice(0, 1);
    }
  }

  display() {
    fill(this.red, this.green, this.blue);
    stroke(this.strokeColor);
    rect(this.pos.x, this.pos.y, this.diameter, this.diameter);
  }

}
