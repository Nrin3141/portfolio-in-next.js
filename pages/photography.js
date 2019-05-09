import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Header from "../components/Headers";
import Gallery from "../components/Gallery";
import { server } from "../config";

export default class PhotographyPage extends Component {
  static async getInitialProps() {
    const res = await fetch(server + "/api/gallery");
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
        <Gallery images={this.state.images} />
      </div>
    );
  }
}
