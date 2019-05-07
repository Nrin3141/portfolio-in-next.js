const express = require("express");
const next = require("next");
const fs = require("fs");
const dev = process.env.NODE_ENV !== "production";
// Create the Express-Next App
const app = next({ dev });
const handle = app.getRequestHandler();
const nodemailer = require("nodemailer");

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
    server.get("/*", (req, res) => {
      return handle(req, res);
    });
    server.use(express.json());

    server.post("/contact", (req, res) => {
      //console.log(req.body);
      let output = `
      <head>
      <style>
      h1{
        color: blue;
      }</style>
      </head>
      <h1>New Mail from Portfolio Website</h1>
      <h2>Contact</h2>
      <h3>Name: ${req.body.name}</h3>
      <h3>Email: ${req.body.email}</h3>
      <h3>Message:</h3>
      <p>${req.body.message}</p>
      `;
      async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "ricotrebeljahr.de",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "rico@ricotrebeljahr.de", // generated ethereal user
            pass: "Schlangen2" // generated ethereal password
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: `"Nodemailer" <rico@ricotrebeljahr.de>`, // sender address
          to: "ricotrebeljahr@yahoo.de, katrin_trebeljahr@yahoo.de", // list of receivers
          subject: "New Contact",
          text: "Some text", // Subject line
          html: output // plain text body
        });
      }

      main().catch(console.error);
      res.send(req.body);
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

// async..await is not allowed in global scope, must use a wrapper
