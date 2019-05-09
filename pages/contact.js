import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Menu from "../components/Menu";
import Header from "../components/Headers";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import { theme } from "../config/theme.js";
import _JSXStyle from "styled-jsx/style";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  inputs: {
    display: "flex",
    width: "80vw",
    flexDirection: "column",
    justifyContent: "space-around",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  },
  paper: {
    textAlign: "center",
    padding: 20,
    margin: 20
  },
  button: {
    margin: "20px 0",
    padding: 10,
    width: "50%",
    alignSelf: "center"
  },
  outer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    margin: 0
  },
  input: {
    flexGrow: 20,
    margin: "1vw"
  },
  message: {
    width: "78vw"
  }
};

class OutlinedTextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multiline: "",
      name: "",
      email: ""
    };
  }
  submit = e => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      message: e.target.message.value,
      name: e.target.name.value
    };
    console.log(data);
    /*fetch("/contact", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => this.setState({ res })); //assign state to array res*/
    this.setState({ res: true });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.outer}>
        <Header />
        <Menu />
        {this.state.res ? (
          <Paper className={classes.paper}>
            <h2>Good news {this.state.res.name} </h2>
            <h3> Your message is on the way ...</h3>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              href="/"
            >
              Home
            </Button>
          </Paper>
        ) : (
          <Paper className={classes.paper}>
            <form
              onSubmit={this.submit}
              className={classes.container}
              noValidate
              autoComplete="off"
            >
              <div className={classes.inputs}>
                <TextField
                  id="outlined-name"
                  label="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange("name")}
                  className={classes.input}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-email"
                  label="Email"
                  name="email"
                  value={this.state.email}
                  className={classes.input}
                  onChange={this.handleChange("email")}
                  margin="normal"
                  variant="outlined"
                />
              </div>
              <TextField
                id="outlined-textarea"
                label="Message"
                name="message"
                multiline
                rowsMax="10"
                margin="normal"
                className={classes.message}
                variant="outlined"
              />
              <Button
                variant="contained"
                color="secondary"
                id="submit"
                type="submit"
                className={classes.button}
              >
                Get in touch
              </Button>
            </form>
          </Paper>
        )}
      </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
