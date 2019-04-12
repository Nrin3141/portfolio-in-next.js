import React, { Component } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Main from "../components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="img" id="background" />
        <div className="container">
          <span className="caption">Hello There!</span>
          <h1 style={{ color: "seagreen", opacity: "0.65" }}>
            This is going to be my awesome website!
          </h1>
        </div>
        <Main />
        <div className="img" id="background" />
        <Footer />
        <style jsx>
          {`
            ul {
              list-style-type: none;
            }
            .fixedMenu {
              align-items: center;
              display: flex;
              position: relative;
              z-index: 1;
              top: 0;
              left: 0;
              padding: 0;
              margin: 0;
              background-color: white;
              width: 100vw;
              height: 10vh;
              justify-content: space-around;
            }
            .flex-row {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
            }
            .flex-column {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            .img {
              height: 100vh;
              width: 100vw;
              padding-bottom: 20vh;
              position: relative;
              background-attachment: fixed;
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
            }
            #background {
              background-image: url("/static/images/img.jpg");
            }
            .container {
              background: white;
              position: absolute;
              left: 0;
              top: 45%;
              margin: 0%;
              width: 100%;
              text-align: center;
              color: #000;
              z-index: 1;
            }
            .opacity {
              opacity: 1 !important;
            }
            .caption {
              background-color: #111;
              color: #fff;
              padding: 18px;
              font-size: 25px;
              letter-spacing: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default App;
