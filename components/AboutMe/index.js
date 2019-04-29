const AboutMe = () => (
  <div className="grid basic">
    <div style={{ gridArea: "p" }} className="width">
      <img src="static/images/profile.jpg" />
      <div className="img" />
    </div>
    <div style={{ gridArea: "h" }} className="width col">
      <h2>About Me</h2>
      <p>
        Hi there, I am Rico - a self-taught full-stack-developer from Berlin. I
        like problem solving. I like programming. I like photography. And I am a
        passionate traveler.
      </p>
    </div>
    <h2 style={{ gridArea: "a" }}>May I help You?</h2>
    <p style={{ gridArea: "b" }}>
      Do you want to have your own website too? Or a Web app? Mobile game?
      Online Shop? Blog?! Or do you have an amazing idea but lack the technical
      skills to actually do it? Don't hesitate to ask.
    </p>
    <button style={{ gridArea: "c" }}>Get in touch!</button>
    <p style={{ gridArea: "d" }}>
      Or are you in search of a full-stack developer to expand your team?
      Somebody who can easily learn and integrate new technologies and loves to
      expand his expertise constantly?
    </p>

    <style jsx>{`
      .basic {
        padding-top: 30px;
        width: 80vw;
        text-align: justify;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .img {
        width: 60vw;
        height: 60vw;
        background: url("/static/images/profile.jpg");
        background-size: cover;
        border-radius: 100%;
      }
      img {
        display: none;
        max-height: 100%;
        max-width: 100%;
        border-radius: 50%;
      }
      .width {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
      .col {
        flex-direction: column;
      }
      @media only screen and (min-width: 600px) {
        .img {
          display: none;
        }
        img {
          display: block;
        }
        .grid {
          align-items: start;
          display: grid;
          grid-template-areas:
            "p . h"
            "a a a"
            "b . d"
            "c c c";
          grid-template-columns: 1fr 0.2fr 1fr;
        }
      }
      @media only screen and (min-width: 900px) {
        .grid {
          align-items: start;
          display: grid;
          grid-template-areas:
            "p . h"
            "a a a"
            "b . d"
            "c c c";
          grid-template-columns: 1fr 0.2fr 1fr;
        }
      }
      h1,
      h2,
      button {
        text-align: center;
      }

      button {
        background-color: #4caf50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
      }
    `}</style>
  </div>
);
export default AboutMe;
