import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
  basic: {
    paddingTop: "30px",
    width: "80vw",
    textAlign: "justify",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  img: {
    width: "60vw",
    height: "60vw",
    background: 'url("/static/images/profile.jpg")',
    backgroundSize: "cover",
    borderRadius: "100%",
    display: "none",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: "50%"
  },
  width: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  col: {
    flexDirection: "column"
  },
  a: {
    backgroundColor: "#4caf50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px"
  }
};

const AboutMe = props => {
  const { classes } = props;

  return (
    <div classes={{ grid: classes.grid, basic: classes.basic }}>
      <div style={{ gridArea: "p" }} className={classes.width}>
        <div className={classes.img} />
      </div>
      <div style={{ gridArea: "h" }} classes={(classes.width, classes.col)}>
        <h2>About Me</h2>
        <p>
          Hi there, I am Rico - a self-taught full-stack-developer from Berlin.
          I like problem solving. I like programming. I like photography. And I
          am a passionate traveler.
        </p>
      </div>
      <h2 style={{ gridArea: "a" }}>May I help You?</h2>
      <p style={{ gridArea: "b" }}>
        Do you want to have your own website too? Or a Web app? Mobile game?
        Online Shop? Blog?! Or do you have an amazing idea but lack the
        technical skills to actually do it? Don't hesitate to ask.
      </p>
      <Button style={{ gridArea: "c" }} href="/contact">
        Get in touch
      </Button>
      <p style={{ gridArea: "d" }}>
        Or are you in search of a full-stack developer to expand your team?
        Somebody who can easily learn and integrate new technologies and loves
        to expand his expertise constantly?
      </p>
    </div>
  );
};

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutMe);

/*const AboutMe = () => (

    <style jsx>{`
    @media only screen and (min-width: 600px): {
      img {
        display: none,
      }
      img {
        display: block,
      }
      grid {
        align-items: start,
        display: grid,
        grid-template-areas:
          "p . h"
          "a a a"
          "b . d"
          "c c c",
        grid-template-columns: 1fr 0.2fr 1fr,
      }
    }
    @media only screen and (min-width: 900px) {
      .grid {
        align-items: start,
        display: grid,
        grid-template-areas:
          "p . h"
          "a a a"
          "b . d"
          "c c c",
        grid-template-columns: 1fr 0.2fr 1fr,
      }
    }
    `}</style>
  </div>
);
export default AboutMe;
*/
