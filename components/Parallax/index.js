import React, { Component } from "react";

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      w: 0,
      h: 0,
      resizeTaskId: null
    };
  }
  componentDidMount = () => {
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight
    });

    window.addEventListener("resize", () => {
      if (this.state.resizeTaskId !== null) {
        clearTimeout(this.state.resizeTaskId);
      }
      this.setState({
        resizeTaskId: setTimeout(() => {
          this.resize();
        }, 100)
      });
    });
  };

  componentWillUnmount = () => {
    clearTimeout(this.state.resizeTaskId);
  };
  resize = () => {
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight,
      resizeTaskId: null
    });
  };
  render() {
    return (
      <div className="splitboard">
        <div className="splitboard-content">
          <iframe
            src="https://nrin3141.github.io/Snake-2.0/"
            width={this.state.w}
            height={this.state.h}
            scrolling="no"
            frameBorder="0"
          />
        </div>
        {this.props.content}
        <div className="splitboard-content">
          <iframe
            src="https://photodyssee.com"
            width={this.state.w}
            height={this.state.h}
            scrolling="no"
            frameborder="0"
          />
        </div>
        <style jsx>{`
          .splitboard {
            height: 100%;
            overflow: hidden;
          }
          .splitboard-content {
            width: 100%;
            height: 100vh;
            background: blue;
            overflow: hidden;
          }
          iframe {
            position: fixed;
            z-index: 0;
            max-width: 100%;
            overflow: hidden;
            pointer-events: none;
          }
        `}</style>
      </div>
    );
  }
}
export default Parallax;
