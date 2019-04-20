import React, { Component } from "react";

const getImagePath = w => {
  if (w >= 2400) {
    return "images";
  }
  if (w <= 800) {
    return "sizes/1600";
  }
  return "sizes/2400";
};

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      w: 0,
      h: 0,
      resizeTaskId: null,
      size: "sizes/1600"
    };
  }
  componentDidMount = () => {
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight,
      size: getImagePath(window.innerWidth)
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
      resizeTaskId: null,
      size: getImagePath(window.innerWidth)
    });
  };
  render() {
    let size = this.state.size;
    return (
      <div>
        <a className="absolute" href={this.props.href}>
          <h2>I am a</h2>
          <h2 style={{ marginLeft: "0.4em" }}>{this.props.headline}</h2>
          <div className="blinking-dash" />
        </a>
        {this.props.images.map(image => (
          <div
            className={"img " + (image === this.props.img ? "on" : "off")}
            id={image.slice(0, -4)}
            key={image.slice(0, -4)}
          />
        ))}

        <style jsx>{`
          #programmer {
            background: url("static/${size}/programmer.jpg");
            background-size: 200%;
            background-position: 50% 80%;
          }
          #photographer {
            background: url("static/${size}/photographer.jpg");
            background-position: 80% 80%;
            background-size: cover;
          }
          #traveler {
            background: url("static/${size}/traveler.jpg");
            background-size: cover;
            background-position: 80% 80%;
          }
          .off {
            display: none;
          }
          @keyframes blink {
            0% {
              background: black;
            }
            50% {
              background: white;
            }
            100% {
              background: black;
            }
          }
          .blinking-dash {
            background: black;
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
            top: 20%;
            width: 80vw;
            padding: 1em 1em;
            flex-direction: row;
            flex-wrap: wrap;
            z-index: 4;
          }
          .img {
            background-repeat: no-repeat;
            opacity: 0.7;
            width: 100vw;
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
              background: url("/static/${size}/programmer2.jpg");
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
          div {
            width: 100%;
            height: 100%;
          }
          div,
          a {
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
