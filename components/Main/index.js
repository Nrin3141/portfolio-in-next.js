import React from "react";
const Main = props => {
  return (
    <div>
      <div className="wrapper">
        <h1>
          I love <i class="fas fa-code" />
        </h1>
        <p>
          And here I am going to write all the stuff about me! <br />
          Hello there, fellow viewer. <br />
          My name is Rico Trebeljahr and I have learned to program in 2017. Here
          is a list of my favorite projects I have built so far:
        </p>
        <h3>Stuff I built so far:</h3>
        <div className="icon-container">
          <div className="tile large" href="#" id="chess" />
          <div className="tile large" href="#" id="tictactoe" />
          <div className="tile large" href="#" id="snake" />
        </div>
        <h3>Technologies I use and love: </h3>
        <div className="icon-container">
          <div className="tile small" id="html" />
          <div className="tile small" id="css" />
          <div className="tile small" id="js" />
          <div className="tile small" id="meteor" />
        </div>
        <div className="icon-container top-margin">
          <div className="tile small" id="react" />
          <div className="tile small" id="node" />
          <div className="tile small" id="graphql" />
          <div className="tile small" id="mongo" />
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
