export default (w, h) => p => {
  p.setup = () => {
    p.createCanvas(w, h);
  };

  p.draw = () => {
    p.background(200);
  };
};
