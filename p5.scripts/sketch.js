export default (w, h) => p => {
  const dots = [];
  for (let i = 0; i < 50; i++) {
    let dot = new Dot(p, p.random(0, w), p.random(0, h));
    dots.push(dot);
  }
  p.setup = () => {
    p.createCanvas(w, h);
  };

  p.draw = () => {
    p.background(51);
    p.fill(255);
    for (let i = 0; i < dots.length; i++) {
      dots[i].show(p);
      dots[i].move();
      if (dots[i].x > w || dots[i].x < 0) {
        dots[i].collideHorizontal();
      }
      if (dots[i].y > h || dots[i].y < 0) {
        dots[i].collideVertical();
      }
      for (let j = 0; j < dots.length; j++) {
        if (
          p.int(p.dist(dots[i].x, dots[i].y, dots[j].x, dots[j].y) < w / 10)
        ) {
          dots[i].connect(
            dots[j].x,
            dots[j].y
          );
        }
      }
    }
  };
};
function Dot(p, x, y) {
  this.x = x;
  this.y = y;
  this.xDir = p.random(-5, 5);
  this.yDir = p.random(-5, 5);
  this.collideHorizontal = () => {
    this.xDir = -this.xDir;
  };
  this.collideVertical = () => {
    this.yDir = -this.yDir;
  };
  this.show = () => {
    p.ellipse(this.x, this.y, 20, 20);
  };
  this.move = (xDir, yDir) => {
    this.x += this.xDir;
    this.y += this.yDir;
  };
  this.connect = (x2, y2) => {
    p.stroke(255);
    p.line(this.x, this.y, x2, y2);
  };
}
