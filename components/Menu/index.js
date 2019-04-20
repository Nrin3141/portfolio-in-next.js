import React, { Component } from "react";
import Link from "next/link";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extend: false
    };
  }
  setExtend = value => {
    this.setState({ extend: value });
  };
  render() {
    return this.state.extend ? (
      <div className="fixedMenu">
        <div className="absolute" onClick={() => this.setExtend(false)}>
          <i className="fas fa-times" />
        </div>
        <div>
          <Link href="/">
            <a title="Home">Home</a>
          </Link>
          <Link href="/photography" prefetch>
            <a title="Photography">Photography</a>
          </Link>
          <Link href="/coding" prefetch>
            <a title="Coding">Coding</a>
          </Link>
        </div>

        <style jsx>{`
          .absolute {
            color: black;
            margin: 0 0 10px 0;
          }

          i {
            background: #f9dc5c;
            padding: 8px 10px;
            border-radius: 50%;
          }
          div {
            display: flex;
            flex-direction: column;
          }
          .fixedMenu {
            position: absolute;
            z-index: 5;
            display: flex;
            flex-direction: column;
            align-items: center;
            top: 0;
            right: 0;
            text-align: center;
            min-width: 20vw;
            padding: 20px;
            margin: 0;
            background: rgba(249, 220, 92, 0.9);
            background: rgba(255, 255, 255, 0.9);
            height: 100vh;
            border-left: 2px solid black;
          }
          a {
            color: black;
            text-decoration: none;
            margin: 5px;
          }
          a:hover {
            color: grey;
          }
        `}</style>
      </div>
    ) : (
      <div className="absolute" onClick={() => this.setExtend(true)}>
        <i className="fas fa-bars" />
        <style jsx>{`
          i {
            background: white;
            padding: 10px;
            border-radius: 50%;
          }
          .absolute {
            position: absolute;
            color: black;
            z-index: 200;
            top: 20px;
            left: 88vw;
            margin: 0;
          }
        `}</style>
      </div>
    );
  }
}
export default Menu;
