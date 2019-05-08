import React from "react";
import PropTypes from "prop-types";
import Head from "../Headers";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import _JSXStyle from "styled-jsx/style";

const styles = {
  appBar: {
    background: "rgb(80, 80, 80)",
    position: "relative",
    zIndex: 3
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-around"
  },
  Button: {
    color: "white",
    padding: 10,
    textDecoration: "none",
    textTransform: "capitalize"
  }
};

class BottomAppBar extends React.Component {
  render() {
    const { classes } = this.props;
    const content = (
      <div>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Button
              className={classes.Button}
              style={{ textDecoration: "none" }}
              href={"https://github.com/Nrin3141"}
              target="blank"
              rel="noopener"
            >
              Github <i className="fab fa-github" />
            </Button>
            <Button
              className={classes.Button}
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/ricotrebeljahr"
              target="blank"
              rel="noopener"
            >
              Linked
              <i className="fab fa-linkedin" />
            </Button>
            <Button
              className={classes.Button}
              style={{ textDecoration: "none" }}
              href="https://stackoverflow.com/story/ricotrebeljahr"
              target="blank"
              rel="noopener"
            >
              <i className="fab fa-stack-overflow" /> Stackoverflow
            </Button>
            <Button
              className={classes.Button}
              style={{ textDecoration: "none" }}
              href="https://codepen.io/Nrin/"
              target="blank"
              rel="noopener"
            >
              Codepen <i className="fab fa-codepen" />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
    return (
      <div>
        <Head />
        {content}
      </div>
    );
  }
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomAppBar);
