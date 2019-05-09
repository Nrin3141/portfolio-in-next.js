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
import _JSXStyle from "styled-jsx/style";

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
              <Link
                key={text}
                href={"/" + (text === "Home" ? "" : text.toLowerCase())}
              >
                <ListItem button>
                  <ListItemIcon>
                    {text === "Photography" ? (
                      <Photography />
                    ) : text === "Coding" ? (
                      <Coding />
                    ) : (
                      <Home />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
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
              right: 5vw;
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
