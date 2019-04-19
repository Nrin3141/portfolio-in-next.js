import React, { Component } from "react";

class Section extends React.Component {
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
      <div>
        <a className="absolute" href={this.props.href}>
          <h2>I am a</h2>
          <h2 style={{ marginLeft: "0.4em" }}>{this.props.headline}</h2>
          <div className="blinking-dash" />
        </a>
        <div
          className="img"
          id={this.props.image.slice(0, this.props.image.length - 4)}
        />
        <style jsx>{`
          @keyframes blink {
              0% {background: black}
              50% {background: white}
              100% {background: black}
          }
          .blinking-dash{
            background: lime;
            line-height: 17px;
            margin-left: 3px;
            animation: blink 0.8s infinite;
            width: 3px;
            height: 15px;
          }

          h2 {
            font-size: 1em;
            margin: 0;
            padding: 0;
          }
          .absolute {
            background: white;
            position: absolute;
            width: auto;
            top: 10%;
            width: 80vw;
            padding: 1em 1em;
            flex-direction: row;
            flex-wrap: wrap;
            z-index: 4;
          }
          .img {
            background-color: #8AE1FC;
            background: url("static/images/${this.props.image}");
            opacity: 0.7;
            width: 100vw;
            height: 100vh;
            background-size: cover;
            background-repeat: no-repeat;
          }
          #photographer {
            background-position: 80% 80%;
          }
          #programmer {
            background-size: 200%;
            background-position: 50% 80%;
          }
          #traveler {
            background-position: 80% 80%;
          }
          @media only screen and (min-width: 850px) {
            #photographer {
              background-position: 80% 20%;
            }
            #traveler {
              background-position: 70% 50%;
            }
          }
          @media only screen and (min-width: 650px) {
            #programmer {
              background-position: 50% 20%;
              background-size: cover;
            }
          }
          @media only screen and (max-width: 650px) {
            #programmer {
              background: url("/static/images/programmer2.jpg");
              background-size: cover;
              background-position: 48% 50%;
            }
          }
          @media only screen and (max-width: 500px) {
            #traveler {
              background-position: 70% 20%;
            }
          }
          @media (orientation: portrait) {
            background-size: auto 100vh;
          }
          a {
            text-decoration: none;
            color: black;
          }
          div, a {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}
export default Section;
