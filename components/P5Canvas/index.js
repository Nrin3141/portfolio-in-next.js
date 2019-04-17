import React, { Component } from "react";
import dynamic from "next/dynamic";

const P5Wrapper = dynamic(import("react-p5-wrapper"), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

class P5Canvas extends React.Component {
  constructor(props) {
    super(props);
  }
  renderP5 = sketchName => {
    const sketch = require(`../../p5.scripts/${sketchName}`).default(500, 400);
    return <P5Wrapper sketch={sketch} />;
  };

  render() {
    return <div>{this.renderP5(this.props.sketch)}</div>;
  }
}
export default P5Canvas;
