import React, { Component } from "react";
import dynamic from "next/dynamic";

const P5Wrapper = dynamic(import("react-p5-wrapper"), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

class P5Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      w: 0,
      h: 0
    };
  }
  componentDidMount = () => {
    this.resize();
    let resizeTaskId = null;
    window.addEventListener("resize", this.delay(resizeTaskId));
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.delay());
  };
  delay = resizeTaskId => {
    if (resizeTaskId !== null) {
      clearTimeout(resizeTaskId);
    }
    resizeTaskId = setTimeout(() => {
      resizeTaskId = null;
      this.resize();
    }, 100);
  };
  resize = () => {
    this.setState({
      h: window.innerHeight,
      w: window.innerWidth
    });
  };
  renderP5 = (sketchName, w, h) => {
    const sketch = require(`../../p5.scripts/${sketchName}`).default(w, h);
    return <P5Wrapper sketch={sketch} />;
  };

  render() {
    return (
      <div>
        {this.renderP5(this.props.sketch, this.state.w, this.state.h)}
        <style jsx>{`
          div {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
          }
        `}</style>
      </div>
    );
  }
}
export default P5Canvas;
