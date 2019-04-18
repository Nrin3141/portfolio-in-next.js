import React from "react";
import Headline from "../Headline";
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
      </div>
      <style jsx global>{`
        .center {
          width: 100%;
          text-align: center;
        }
        .bottom-padding {
          padding-bottom: 10vh;
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
      `}</style>
      <style jsx>{`
        .wrapper {
          position: relative;
          background-color: white;
          margin: 0;
          width: 100%;
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
