import React from "react";
import "../../App.css";
import "./Main.css";
const Main = props => {
  return (
    <div>
      <div className="wrapper">
        <h1>This is the main section!</h1>
        <p>
          And here I am going to write all the stuff about me! <br />
          Hello there, fellow viewer. <br />
          My name is Rico Trebeljahr and I have learned to program in 2017. Here
          is a list of my favorite projects I have built so far:
        </p>
        <h3>Stuff I built so far:</h3>
        <div className="icon-container">
          <a href="#">Project 1</a>
          <a href="#">Project 2</a>
          <a href="#">Project 3</a>
        </div>
        <h3>Technologies I use and love: </h3>
        <div className="icon-container">
          <div className="technology" id="html" />
          <div className="technology" id="css" />
          <div className="technology" id="js" />
          <div className="technology" id="meteor" />
        </div>
        <div className="icon-container top-margin">
          <div className="technology" id="react" />
          <div className="technology" id="node" />
          <div className="technology" id="graphql" />
          <div className="technology" id="mongo" />
        </div>
        <h3>You can also find me on:</h3>
        <div className="icon-container">
          <div className="social">
            Github <i className="fab fa-github" />
          </div>
          <div className="social">
            Linked
            <i className="fab fa-linkedin" />
          </div>
          <div className="social">
            <i className="fab fa-stack-overflow" /> Stackoverflow
          </div>
          <div className="social">
            Codepen <i className="fab fa-codepen" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
