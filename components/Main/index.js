import React from "react";
import Headline from "../Headline";
import Social from "../Social";
import Projects from "../Projects";
import AboutMe from "../AboutMe";
import Technologies from "../Technologies";

const Main = props => {
  return (
    <div>
      <Headline />
      <div className="wrapper">
        <AboutMe />
        <Projects />
        <Technologies />
        <Social />
      </div>
      <style jsx global>{`
        .full {
          width: 100%;
          text-align: center;
          padding-bottom: 5%;
        }
        .tile {
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
        .icon-container {
          width: 100%;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .top-margin {
          margin-top: 5%;
        }
        .large {
          width: 20vw;
          height: 20vw;
        }
        .large:hover {
          width: 25vw;
          height: 25vw;
        }
        .small {
          width: 10vw;
          height: 10vw;
        }
        .small:hover {
          width: 12vw;
          height: 12vw;
        }
      `}</style>
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
      `}</style>
    </div>
  );
};
export default Main;
