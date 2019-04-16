const fs = require("fs");
const sharp = require("sharp");

fs.readdir("./static/gallery", (err, data) => {
  data.forEach(image => {
    const widths = [400, 800, 1600, 2400];
    widths.forEach(width => {
      fs.mkdir(`./static/sizes/${width}`, { recursive: true }, err => {
        if (err) throw err;
      });
      sharp(`./static/gallery/${image}`)
        .resize({ width })
        .toFile(`./static/sizes/${width}/${image}`)
        .then(() => {});
    });
  });
});
