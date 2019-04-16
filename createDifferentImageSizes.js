const fs = require("fs");
const sharp = require("sharp");
const path = require("path");

fs.readdir("/static/gallery", (err, data) => {
  data.forEach(image => {
    const widths = [400, 800, 1600, 2400];
    widths.forEach(width => {
      generateMissingDirectories(width, image)
        .then(() => {
          sharp(`/static/gallery/${image}`)
            .resize({ width })
            .toFile(`/static/sizes/${width}/${image}`)
            .then(() => {});
          return;
        })
        .catch(err => console.error(err));
    });
  });
});
async function generateMissingDirectories(width, image) {
  await fs.mkdir(`/static/sizes/${width}`, { recursive: true }, err => {
    if (err) throw err;
  });
  return;
}
