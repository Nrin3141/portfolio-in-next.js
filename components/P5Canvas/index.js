import React, { Component } from "react";
import dynamic from "next/dynamic";

const P5Wrapper = dynamic(import("react-p5-wrapper"), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

class P5Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w: 400,
      h: 400
    };
  }
  componentDidMount = () => {
    this.setState(() => ({
      w: window.innerWidth,
      h: window.innerHeight
    }));
  };
  render() {
    const sketch = require(`../../p5.scripts/${this.props.sketch}`).default;
    return (
      <div>
        <P5Wrapper sketch={sketch(this.state.w, this.state.h)} />
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
