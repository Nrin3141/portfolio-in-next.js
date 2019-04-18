export default (w, h) => p => {
  let dots = [];
  for (let i = 0; i < 30; i++) {
    let dot = new Dot(
      p,
      p.int(p.random(-50, w + 50)),
      p.int(p.random(-50, h + 50))
    );
    dots.push(dot);
  }
  p.setup = () => {
    p.createCanvas(w, h);
  };
  p.draw = () => {
    p.background(51);
    p.fill(255);
    dots.forEach((dot, index) => {
      dot.show(p);
      dot.move();
      if (dot.x > w + 100 || dot.x < -100) {
        dot.collideHorizontal();
      }
      if (dot.y > h + 100 || dot.y < -100) {
        dot.collideVertical();
      }
      dots.forEach(dot2 => {
        if (index % 10 === 0) {
          dot.connect(
            p,
            dot2.x,
            dot2.y
          );
        }
      });
    });
  };
};

function Dot(p, x, y, w, h) {
  this.x = x;
  this.y = y;
  this.show = p => {
    p.stroke(51);
    p.point(this.x, this.y);
  };
  this.connect = (p, x2, y2) => {
    p.stroke(255);
    p.line(this.x, this.y, x2, y2);
  };
  this.velX = p.random(-2, 2);
  this.velY = p.random(-2, 2);
  this.move = () => {
    this.x += this.velX;
    this.y += this.velY;
  };
  (this.collideHorizontal = () => {
    this.velX = -this.velX;
  }),
    (this.collideVertical = () => {
      this.velY = -this.velY;
    });
}
