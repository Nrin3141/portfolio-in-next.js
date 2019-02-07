import React, { Component } from "react";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="img" id="plant-background">
          <div className="container">
            <span className="caption">Hello There!</span>
            <h1 style={{ color: "seagreen" }}>
              This is going to be my awesome website!
            </h1>
          </div>
        </div>
        <Main />
        <div className="img" id="plant-background" />
        <Footer />
      </div>
    );
  }
}

export default App;
