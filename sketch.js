//let particleMax = 100;
let particle = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(255, 0, 100);
  //background('rgba(255,255,255, 0.25)');
  //background("rgba(200,100,80,0.5)");
}

function draw() {
  background("rgba(255,0,100,0.05)");
  //background(255, 0, 100);
  for (let i = 0; i < particle.length; i++) {
    particle[i].update();
    particle[i].display();
  }
}

function mouseClicked() {
  //background("rgba(255, 0, 100,0.1)");
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
    this.red = random(0, 100)
    this.green = random(50, 80)
    this.blue = random(0, 200)
    this.diameter = random(10, 15)
    this.t = 1;
    this.noiseShift = 100;
    this.pos = createVector(_mouseX, _mouseY);
    //this.pos1 = createVector(_mouseX, _mouseY);
    //this.pos2 = createVector(450, 200);
    //this.speed = createVector(noise(-4, 4), noise(-4, 4));
    this.speed = createVector(random(4), random(4));
    this.history = [];
  }

  update() {
    this.speed.rotate(map(noise(this.t + this.noiseShift), 0, 1, -0.1, 0.2));
    this.pos.add(this.speed);
    this.t += 0.3;
    this.history.push(this.pos);
    //this.diameter += 0.01;
    //this.pos1.add(this.speed);
    //this.pos2.add(this.speed);
    if (this.history.length > 20) {
      this.history.splice(0, 1);
    }
  }

  display() {
    //noStroke();
    //for (let i = 0; i < this.history.length; i++) {
    //circle(this.pos.x, this.pos.y, 15);
    //}
    fill(this.red, this.green, this.blue);
    rect(this.pos.x, this.pos.y, this.diameter, this.diameter)
    //ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
    //stroke(this.red, this.green, this.blue);
    //line(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y);
  }

}
