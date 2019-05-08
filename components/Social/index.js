import React from "react";
import PropTypes from "prop-types";
import Head from "../Headers";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import Link from "@material-ui/core/Link";

const styles = {
  text: {
    /*paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2*/
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    /*marginBottom: theme.spacing.unit * 2*/
  },
  subHeader: {
    /*backgroundColor: theme.palette.background.paper*/
  },
  appBar: {
    background: "rgb(40, 40, 40)",
    position: "relative",
    zIndex: 3
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  link: {
    color: "white",
    textDecoration: "none"
  }
};

class BottomAppBar extends React.Component {
  render() {
    const { classes } = this.props;
    const content = (
      <div>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Link
              className={classes.link}
              href={"https://github.com/Nrin3141"}
              target="blank"
            >
              Github <i className="fab fa-github" />
            </Link>
            <Link
              className={classes.link}
              href="https://www.linkedin.com/in/ricotrebeljahr"
              target="blank"
            >
              Linked
              <i className="fab fa-linkedin" />
            </Link>
            <Link
              className={classes.link}
              href="https://stackoverflow.com/story/ricotrebeljahr"
              target="blank"
            >
              <i className="fab fa-stack-overflow" /> Stackoverflow
            </Link>
            <Link
              className={classes.link}
              href="https://codepen.io/Nrin/"
              target="blank"
            >
              Codepen <i className="fab fa-codepen" />
            </Link>
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
