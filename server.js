const express = require("express");
const next = require("next");
var cors = require("cors");
const fs = require("fs");
const dev = process.env.NODE_ENV !== "production";
const request = require("request");
const app = next({ dev });
const handle = app.getRequestHandler();
const { check, body, validationResult } = require("express-validator/check");
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
    server.use(express.urlencoded());
    server.use(cors());
    server.post(
      "/contact",
      [
        check("email").isEmail(),
        body("email").normalizeEmail()

        // password must be at least 5 chars long
      ],
      (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.send({ responseCode: 1, errors: errors.array() });
        }
        if (
          req.body.captcha === undefined ||
          req.body.captcha === "" ||
          req.body.captcha === null
        ) {
          return res.send({
            responseCode: 1,
            responseDesc: "Please select captcha"
          });
        }
        // Put your secret key here.
        var secretKey = process.env.RECAPTCHA_API_PRIVATE_KEY;
        // req.connection.remoteAddress will provide IP address of connected user.
        var verificationUrl =
          "https://www.google.com/recaptcha/api/siteverify?secret=" +
          secretKey +
          "&response=" +
          req.body.captcha +
          "&remoteip=" +
          req.connection.remoteAddress;
        // Hitting GET request to the URL, Google will respond with success or error scenario.
        request(verificationUrl, function(error, response, body) {
          body = JSON.parse(body);
          // Success will be true or false depending upon captcha validation.
          if (body.success !== undefined && !body.success) {
            return res.json({
              responseCode: 1,
              responseDesc: "Captcha invalid"
            });
          }
          // username must be an email

          // Finds the validation errors in this request and wraps them in an object with handy functions

          let output = `
      <h2>Contact Info</h2>
      <h3>Name: ${req.body.name}</h3>
      <h3>Email: ${req.body.email}</h3>
      <h2>Message:</h3>
      <p>${req.body.message}</p>
      `;
          async function main() {
            let transporter = nodemailer.createTransport({
              host: process.env.MAIL_HOST,
              port: 587,
              secure: false,
              auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
              },
              tls: {
                rejectUnauthorized: false
              }
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
              from: `"Nodemailer" <rico@ricotrebeljahr.de>`, // sender address
              to: "ricotrebeljahr@yahoo.de", // list of receivers
              subject: req.body.subject,
              text: "Some text", // Subject line
              html: output // plain text body
            });
          }

          main().catch(console.error);
          res.send(req.body);
        });
      }
    );
    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
