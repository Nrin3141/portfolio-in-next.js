const fs = require("fs");
const sharp = require("sharp");

fs.readdir(process.argv[2], (err, data) => {
  data.forEach(image => {
    const widths = [400, 800, 1600, 2400];
    widths.forEach(width => {
      generateImage(width, image);
    });
  });
});

async function generateImage(width, image) {
  await fs.mkdir(`./static/sizes/${width}`, { recursive: true }, err => {
    if (err) throw err;
    sharp(`${process.argv[2]}/${image}`)
      .resize({ width })
      .toFile(`./static/sizes/${width}/${image}`)
      .then(() => {});
  });
}
