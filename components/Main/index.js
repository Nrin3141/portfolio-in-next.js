import React, { Component } from "react";
import Headline from "../Headline";
import Section from "../Section";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 2
    };
  }
  componentDidMount = () => {
    this.setState({ timer: setInterval(this.changeSection, 5000) });
  };
  changeSection = () => {
    this.setState(() => ({
      counter: this.state.counter + 1
    }));
  };
  componentWillUnmount = () => {
    clearInterval(this.state.timer);
  };
  render() {
    return (
      <div className="wrapper">
        <div className={this.state.counter % 3 === 0 ? "on" : "off"}>
          <Section image="programmer.jpg" headline="Developer" />
        </div>
        <div className={this.state.counter % 3 === 1 ? "on" : "off"}>
          <Section image="photographer.jpg" headline="Photographer" />
        </div>
        <div className={this.state.counter % 3 === 2 ? "on" : "off"}>
          <Section image="traveler.jpg" headline="Traveler" />
        </div>
        <style jsx>{`
          .wrapper {
            position: relative;
            margin: 0;
            padding: 0;
            width: 100vw;
            height: 100vh;
            text-align: justify;
            color: black;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .on {
            display: block;
            width: 100%;
          }
          .off {
            display: none;
          }
        `}</style>
      </div>
    );
  }
}
export default Main;
