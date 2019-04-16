import React, { component } from "react";
import Footer from "../Footer";
import Menu from "../Menu";

const calculateWidth = w => {
  if (w >= 1600) {
    return w / 4;
  }
  if (w >= 800) {
    return w / 3;
  }
  if (w >= 400) {
    return w / 2;
  }
  return w;
};

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      extend: false,
      index: 0
    };
  }
  componentDidMount = () => {
    this.setState({ width: calculateWidth(screen.width) });
  };
  handleExtend = index => {
    this.setState({ extend: true, index });
    document.addEventListener("keydown", this.handleKey);
  };
  handleCollapse = () => {
    this.setState({ extend: false, index: 0 });
    document.removeEventListener("keydown", this.handleKey);
  };
  handleNextImage = () => {
    this.setState(state => ({ index: this.state.index + 1 }));
  };
  handleLastImage = () => {
    this.setState(state => ({ index: this.state.index - 1 }));
  };
  handleKey = e => {
    if (e.key === "Escape") {
      this.handleCollapse();
    }
    if (e.key === "ArrowRight") {
      this.handleNextImage();
    }
    if (e.key === "ArrowLeft") {
      this.handleLastImage();
    }
  };
  render() {
    return (
      <div>
        {this.state.extend ? (
          <div className="slideshow-container">
            <button
              onClick={this.state.index > 0 ? this.handleLastImage : null}
            >
              Last
            </button>
            <div className="img-container">
              <img
                className="large"
                src={`/api/image/${image}?width=${screen.width}`}
              />
              <div id="collapse-button-container">
                <button onClick={this.handleCollapse}>X</button>
              </div>
            </div>
            <button
              onClick={
                this.state.index < this.props.images.length - 1
                  ? this.handleNextImage
                  : null
              }
            >
              Next
            </button>
          </div>
        ) : (
          <div>
            <Menu />
            <div className="container">
              <h1>Gallery</h1>
              <p>This is a gallery showcasing some of my photography!</p>
              {this.state.image}
              {
                <div className="masonry">
                  {this.props.images.map((image, index) => {
                    return (
                      <img
                        onClick={() => this.handleExtend(index)}
                        key={index}
                        className="item"
                        src={`/api/image/${image}?width=${this.state.width}`}
                      />
                    );
                  })}
                </div>
              }
            </div>
            <Footer />
          </div>
        )}

        <style jsx>{`
          .masonry {
            column-count: 1;
            column-gap: 0.5em;
          }

          @media only screen and (min-width: 400px) {
            .masonry {
              column-count: 2;
            }
          }
          @media only screen and (min-width: 800px) {
            .masonry {
              column-count: 3;
            }
          }
          @media only screen and (min-width: 1600px) {
            .masonry {
              column-count: 4;
            }
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 5% 0 5%;
          }
          #collapse-button-container {
            position: absolute;
            top: 2%;
            width: 100%;
            display: flex;
            justify-content: center;
          }
          #collapse-button-container button {
            border-radius: 10%;
            padding: 0 2%;
          }
          .img-container {
            position: relative;
            background: black;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          .slideshow-container {
            display: grid;
            grid-template-columns: 1fr 20fr 1fr;
            width: 100%;
            height: 100vh;
          }
          button {
            background: black;
            border: none;
            color: white;
          }
          button:hover {
            background: grey;
          }
          .item {
            display: inline-block;
            background-color: #eee;
            margin: 0 0 0.5em;
            width: 100%;
            cursor: pointer;
          }
          .large {
            max-height: 100%;
            max-width: 100%;
          }
        `}</style>
      </div>
    );
  }
}
