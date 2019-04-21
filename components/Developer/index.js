import React from "react";
//import Headline from "../Headline";
import Projects from "../Projects";
import AboutMe from "../AboutMe";
import Technologies from "../Technologies";

const Developer = () => {
  return (
    <div className="outer">
      {/*
      <Headline
        text="What?"
        secondText="You search for a developer?"
        parallax="true"
      />*/}
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
        .outer {
          position: relative;
          z-index: 1;
          width: 100vw;
          background: rgb(51, 51, 51);
          display: flex;
          justify-content: center;
        }
        .wrapper {
          border-radius: 0 0 30px 30px;
          position: relative;
          z-index: 1;
          background: white;
          width: 90vw;
          text-align: justify;
          color: black;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 1;
          padding-bottom: 10%;
        }
      `}</style>
    </div>
  );
};
export default Developer;
