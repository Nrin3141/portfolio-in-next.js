import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Header from "../components/Headers";
import Gallery from "../components/Gallery";

export default class PhotographyPage extends Component {
  static async getInitialProps() {
    const res = await fetch("http://localhost:3000/api/gallery");
    const images = await res.json();
    return { images };
  }
  componentWillMount() {
    this.setState({
      images: this.props.images
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Gallery images={this.state.images} />
      </div>
    );
  }
}
