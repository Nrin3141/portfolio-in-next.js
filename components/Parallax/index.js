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
            src="https://nrin3141.github.io/portfolio-banner/"
            width={this.state.w}
            height={this.state.h}
            scrolling="no"
            frameBorder="0"
          />
        </div>
        {this.props.content}

        <style jsx>{`
          .splitboard {
            height: 100%;
            overflow: hidden;
          }
          .splitboard-content {
            width: 100%;
            height: 50vh;
            background: rgb(51, 51, 51);
            overflow: hidden;
          }
          iframe {
            position: fixed;
            z-index: 0;
            max-width: 100%;
            overflow: hidden;
          }
        `}</style>
      </div>
    );
  }
}
export default Parallax;
