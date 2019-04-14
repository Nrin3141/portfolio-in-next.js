import React, { Component } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Head from "../components/Headers";

import Parallax from "../components/Parallax";
import Main from "../components/Main";

class Coding extends Component {
  render() {
    return (
      <div>
        <Head />
        <Menu />
        <Parallax page={<Main />} />
        <Footer />
      </div>
    );
  }
}

export default Coding;
