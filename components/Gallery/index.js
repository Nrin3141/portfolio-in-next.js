import React, { component } from "react";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extend: false,
      index: 0
    };
  }
  handleExtend = index => {
    this.setState({ extend: true, index });
  };
  handleCollapse = () => {
    this.setState({ extend: false, index: 0 });
  };
  handleNextImage = () => {
    this.setState(state => ({ index: this.state.index + 1 }));
  };
  handleLastImage = () => {
    this.setState(state => ({ index: this.state.index - 1 }));
  };
  componentDidUpdate = () => {};
  render() {
    return (
      <div>
        {this.state.extend ? (
          <div className="slideshow-container">
            {this.state.index > 0 ? (
              <button onClick={this.handleLastImage}>Last</button>
            ) : null}
            <div className="img-container">
              <img
                className="large"
                src={"/static/gallery/" + this.props.images[this.state.index]}
              />
              <div id="collapse-button-container">
                <button onClick={this.handleCollapse}>X</button>
              </div>
            </div>
            {this.state.index < this.props.images.length - 1 ? (
              <button onClick={this.handleNextImage}>Next</button>
            ) : null}
          </div>
        ) : (
          <div className="masonry">
            {this.props.images.map((image, index) => (
              <img
                onClick={() => this.handleExtend(index)}
                key={index}
                className="item"
                src={"/static/gallery/" + image}
              />
            ))}
          </div>
        )}

        <style jsx>{`
          #collapse-button-container {
            position: absolute;
            top: 0px;
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .img-container {
            position: relative;
            background: black;
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          .slideshow-container {
            display: grid;
            grid-template-columns: 1fr 20fr 1fr;
            width: 100%;
            height: 80vh;
          }
          .masonry {
            column-count: 4;
            column-gap: 0.5em;
          }
          .item {
            display: inline-block;
            background-color: #eee;
            margin: 0 0 0.5em;
            width: 100%;
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
