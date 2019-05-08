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

const Technologies = props => {
  const { classes } = props;

  return (
    <div className="center">
      <h2>Technologies I use and love: </h2>
      <div className="icon-container">
        <div className="size">
          <div className="tile small" id="html" />
        </div>
        <div className="size">
          <div className="tile small" id="css" />
        </div>
        <div className="size">
          <div className="tile small" id="js" />
        </div>
        <div className="size">
          <div className="tile small" id="meteor" />
        </div>
        <div className="size">
          <div className="tile small" id="react" />
        </div>
        <div className="size">
          <div className="tile small" id="node" />
        </div>
        <div className="size">
          <div className="tile small" id="graphql" />
        </div>
        <div className="size">
          <div className="tile small" id="mongo" />
        </div>
      </div>
  );
};

Technologies.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Technologies);

/*const Technologies = () => (
  <div className="center">
    <h2>Technologies I use and love: </h2>
    <div className="icon-container">
      <div className="size">
        <div className="tile small" id="html" />
      </div>
      <div className="size">
        <div className="tile small" id="css" />
      </div>
      <div className="size">
        <div className="tile small" id="js" />
      </div>
      <div className="size">
        <div className="tile small" id="meteor" />
      </div>
      <div className="size">
        <div className="tile small" id="react" />
      </div>
      <div className="size">
        <div className="tile small" id="node" />
      </div>
      <div className="size">
        <div className="tile small" id="graphql" />
      </div>
      <div className="size">
        <div className="tile small" id="mongo" />
      </div>
    </div>

    <style jsx>{`
      h2 {
        margin-top: 50px;
      }
      .size {
        height: 10vw;
        width: 10vw;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .small {
        width: 8vw;
        height: 8vw;
      }
      .small:hover {
        width: 10vw;
        height: 10vw;
      }
      @media only screen and (max-width: 800px) {
        .size {
          height: 22vw;
          width: 22vw;
        }
        .small {
          width: 15vw;
          height: 15vw;
        }
        .small:hover {
          width: 22vw;
          height: 22vw;
        }
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
    `}</style>
  </div>
);
export default Technologies;*/
