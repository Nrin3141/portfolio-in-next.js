import _JSXStyle from "styled-jsx/style";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  white: {
    width: "80vw",
    margin: 10,
    padding: 20,
    textAlign: "center"
  }
};
const Projects = ({ classes }) => (
  <Paper className={classes.white}>
    <h2>
      <i className="fas fa-code" /> Projects
    </h2>
    <div className="icon-container">
      <a className="size" href="https://chess.ricotrebeljahr.de" target="blank">
        <div className="tile large" id="chess" />
        <div className="absolute">View</div>
      </a>
      <a
        className="size"
        href="https://tic-tac-toe.ricotrebeljahr.de"
        target="blank"
      >
        <div className="tile large" id="tictactoe" />
        <div className="absolute">View</div>
      </a>
      <a
        className="size"
        href="https://nrin3141.github.io/Snake-2.0/"
        target="blank"
      >
        <div className="tile large" id="snake" />
        <div className="absolute">View</div>
      </a>
      <a className="size" href="https://photodyssee.com" target="blank">
        <div className="tile large" id="img" />
        <div className="absolute">View</div>
      </a>
    </div>
    <style jsx>{`
      h2 {
        text-align: center;
      }
      .icon-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }
      .tile {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin: 5px;
      }
      a {
        text-decoration: none;
        color: black;
      }
      .absolute {
        display: none;
      }
      .size:hover > .absolute {
        background: rgb(20, 20, 20);
        color: white;
        display: flex;
        padding: 6% 12%;
        position: absolute;
        text-align: center;
      }
      .size:hover > .large {
        width: 20vw;
        height: 20vw;
        opacity: 0.65;
      }
      .size {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20vw;
        width: 20vw;
        position: relative;
      }
      .large {
        width: 18vw;
        height: 18vw;
      }

      @media only screen and (max-width: 800px) {
        .size {
          height: 40vw;
          width: 40vw;
          margin-top: 5%;
        }
        .large {
          width: 40vw;
          height: 40vw;
        }
        .size:hover > .large {
          width: 40vw;
          height: 40vw;
        }
      }
      @media only screen and (max-width: 400px) {
        .size {
          height: 80vw;
          width: 80vw;
          margin-top: 5%;
        }
        .large {
          width: 80vw;
          height: 80vw;
        }
        .size:hover > .large {
          width: 80vw;
          height: 80vw;
        }
      }
      #img {
        background-image: url("/static/images/profile.jpg");
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
    `}</style>
  </Paper>
);
Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
