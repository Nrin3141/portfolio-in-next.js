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
      async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass // generated ethereal password
          }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: `"${req.body.name} 👻" ${req.body.email}`, // sender address
          to: "ricotrebeljahr@yahoo.de", // list of receivers
          subject: "Contact Form", // Subject line
          text: req.body.message // plain text body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
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
