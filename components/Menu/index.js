import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Photography from "@material-ui/icons/PhotoCamera";
import Home from "@material-ui/icons/Home";
import Coding from "@material-ui/icons/Code";
import Link from "next/link";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          {["Home", "Photography", "Coding"].map((text, index) => {
            return (
              <ListItem button key={text}>
                <ListItemIcon>
                  {text === "Photography" ? (
                    <Photography />
                  ) : text === "Coding" ? (
                    <Coding />
                  ) : (
                    <Home />
                  )}
                </ListItemIcon>
                <Link href={"/" + (text === "Home" ? "" : text.toLowerCase())}>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            );
          })}
        </List>
      </div>
    );

    return (
      <div>
        <div className="absolute">
          <Button onClick={this.toggleDrawer("right", true)}>
            <i className="fas fa-bars" />
          </Button>
          <style jsx>{`
            i {
              background: white;
              padding: 10px;
              border-radius: 50%;
            }
            .absolute {
              position: absolute;
              color: black;
              z-index: 200;
              top: 20px;
              left: 88vw;
              margin: 0;
            }
          `}</style>
        </div>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);

/*import React, { Component } from "react";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extend: false
    };
  }
  setExtend = value => {
    this.setState({ extend: value });
  };
  render() {
    return this.state.extend ? (
      <div className="fixedMenu">
        <div className="absolute" onClick={() => this.setExtend(false)}>
          <i className="fas fa-times" />
        </div>


        <style jsx>{`
          .absolute {
            color: black;
            margin: 0 0 10px 0;
          }
          i {
            background: #f9dc5c;
            padding: 8px 10px;
            border-radius: 50%;
          }
          div {
            display: flex;
            flex-direction: column;
          }
          .fixedMenu {
            position: absolute;
            z-index: 5;
            display: flex;
            flex-direction: column;
            align-items: center;
            top: 0;
            right: 0;
            text-align: center;
            min-width: 20vw;
            padding: 20px;
            margin: 0;
            background: #f0eff4;
            height: 100vh;
            border-left: 2px solid black;
          }
          a {
            color: black;
            text-decoration: none;
            margin: 5px;
          }
          a:hover {
            color: grey;
          }
        `}</style>
      </div>
    ) : (

    );
  }
}
export default Menu;*/
