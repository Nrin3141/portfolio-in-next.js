const express = require("express");
const next = require("next");
const fs = require("fs");

const dev = process.env.NODE_ENV !== "production";
// Create the Express-Next App
const app = next({ dev });
const handle = app.getRequestHandler();
const resize = require("./resize");

//Start the app
app
  .prepare()
  //Start Express server and serve the
  .then(() => {
    const server = express();
    server.get("/api/gallery", (req, res) => {
      fs.readdir("./static/gallery", (err, data) => {
        res.send(data);
      });
    });
    server.get("/api/image/:name", (req, res) => {
      const widthString = req.query.width;
      const heightString = req.query.height;
      const format = req.query.format;

      let width, height;
      if (widthString) {
        width = parseInt(widthString);
      }
      if (heightString) {
        height = parseInt(heightString);
      }
      res.type(`image/${format || "png"}`);
      resize(`./static/gallery/${req.params.name}`, format, width, height).pipe(
        res
      );
    });
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
