import React from "react";
const Main = props => {
  return (
    <div>
      <div className="wrapper">
        <h1>
          I love <i className="fas fa-code" />
        </h1>
        <p>
          And here I am going to write all the stuff about me! <br />
          Hello there, fellow viewer. <br />
          My name is Rico Trebeljahr and I have learned to program in 2017. Here
          is a list of my favorite projects I have built so far:
        </p>
        <h3>Stuff I built so far:</h3>
        <div className="icon-container">
          <a className="tile large" href="#" id="chess" />
          <a
            className="tile large"
            href="https://codepen.io/Nrin/full/QzvwQe"
            id="tictactoe"
            target="blank"
          />
          <a
            className="tile large"
            href="https://nrin3141.github.io/Snake-2.0/"
            id="snake"
            target="blank"
          />
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
          <a
            className="social"
            href="https://github.com/Nrin3141"
            target="blank"
          >
            Github <i className="fab fa-github" />
          </a>
          <a
            className="social"
            href="https://www.linkedin.com/in/ricotrebeljahr"
            target="blank"
          >
            Linked
            <i className="fab fa-linkedin" />
          </a>
          <a
            className="social"
            href="https://stackoverflow.com/story/ricotrebeljahr"
            target="blank"
          >
            <i className="fab fa-stack-overflow" /> Stackoverflow
          </a>
          <a className="social" href="https://codepen.io/Nrin/" target="blank">
            Codepen <i className="fab fa-codepen" />
          </a>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          position: relative;
          background-color: white;
          padding: 4% 10%;
          margin: auto;
          width: 80%;
          text-align: justify;
          color: black;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 1;
        }
        #html {
          background-image: url("/static/images/html5.svg");
        }
        #css {
          background-image: url("/static/images/css3.svg");
        }
        #js {
          background-image: url("/static/images/javascript.png");
        }
        #meteor {
          background-image: url("/static/images/meteor-text.svg");
        }
        #mongo {
          background-image: url("/static/images/mongo.svg");
        }
        #graphql {
          background-image: url("/static/images/graphql.svg");
        }
        #node {
          background-image: url("/static/images/node.svg");
        }
        #react {
          background-image: url("/static/images/react.svg");
        }
        #chess {
          background-image: url("/static/images/chess.png");
        }
        #tictactoe {
          background-image: url("/static/images/tictactoe.png");
        }
        #snake {
          background-image: url("/static/images/snake.png");
        }
        .large:hover {
          width: 25vw;
          height: 25vw;
        }
        .small:hover {
          width: 12vw;
          height: 12vw;
        }
        .tile {
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
        .large {
          width: 20vw;
          height: 20vw;
        }
        .icon-container {
          width: 100%;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .top-margin,
        h1,
        h2,
        h3 {
          margin-top: 5%;
        }
        .social {
          color: black;
          text-decoration: none;
        }
        .social:hover {
        }
        .small {
          width: 10vw;
          height: 10vw;
        }
      `}</style>
    </div>
  );
};
export default Main;
