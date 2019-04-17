import React, { component } from "react";
import Footer from "../Footer";
import Menu from "../Menu";

const getImagePath = w => {
  if (w >= 2400) {
    return "gallery";
  }
  if (w >= 1600) {
    return "sizes/2400";
  }
  if (w >= 800) {
    return "sizes/1600";
  }
  if (w >= 400) {
    return "sizes/800";
  }
  return "sizes/400";
};
const getGalleryPath = w => {
  if (w >= 800) {
    return "sizes/800";
  }
  return "sizes/400";
};

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: "sizes/400",
      galleryPath: "sizes/400",
      extend: false,
      index: 0
    };
  }
  componentDidMount = () => {
    this.setState({
      imagePath: getImagePath(window.innerWidth),
      galleryPath: getGalleryPath(window.innerWidth)
    });
    document.addEventListener("orientationchange", this.orientationchange);
  };
  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKey);
    document.removeEventListener("touchstart", this.touchstart);
    document.removeEventListener("touchend", this.touchend);
    document.removeEventListener("orientationchange", this.orientationchange);
  };
  orientationchange = () => {
    this.setState({
      imagePath: getImagePath(window.innerWidth),
      galleryPath: getGalleryPath(window.innerWidth)
    });
  };
  handleExtend = index => {
    this.setState({ extend: true, index });
    document.addEventListener("keydown", this.handleKey);
    document.addEventListener("touchstart", this.touchstart);
    document.addEventListener("touchend", this.touchend);
  };

  x = 0;
  touchstart = e => {
    this.x = e.targetTouches[0].clientX;
    document.addEventListener("touchmove", this.touchmove);
  };
  touchmove = e => {};
  touchend = e => {
    if (e.changedTouches[0].clientX - this.x > 60) {
      this.handleLastImage();
    } else if (e.changedTouches[0].clientX - this.x < -60) {
      this.handleNextImage();
    }
    this.x = 0;
  };
  handleCollapse = () => {
    this.setState({ extend: false, index: 0 });
    document.removeEventListener("keydown", this.handleKey);
    document.removeEventListener("touchstart", this.touchstart);
    document.removeEventListener("touchend", this.touchend);
  };
  handleNextImage = () => {
    if (this.state.index < this.props.images.length - 1) {
      this.setState(state => ({ index: this.state.index + 1 }));
    }
  };
  handleLastImage = () => {
    if (this.state.index > 0) {
      this.setState(state => ({ index: this.state.index - 1 }));
    }
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
              className="gallery-control-buttons"
              onClick={this.handleLastImage}
            >
              Last
            </button>
            <div className="img-container">
              <img
                className="large"
                src={`/static/${this.state.imagePath}/${
                  this.props.images[this.state.index]
                }`}
              />
              <div id="collapse-button-container">
                <button onClick={this.handleCollapse}>X</button>
              </div>
            </div>
            <button
              className="gallery-control-buttons"
              onClick={this.handleNextImage}
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
                        src={`/static/${this.state.galleryPath}/${image}`}
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
          .slideshow-container {
            display: grid;
            grid-template-columns: 1fr 20fr 1fr;
            width: 100%;
            height: 100vh;
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 5% 0 5%;
          }
          @media (pointer: coarse) {
            .gallery-control-buttons {
              display: none;
            }
            .slideshow-container {
              grid-template-columns: 1fr;
              width: 100%;
              height: 100vh;
            }
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
