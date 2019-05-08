import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Menu from "../components/Menu";
import Header from "../components/Headers";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  button: {
    background: "blue",
    margin: "20px 0",
    padding: 10,
    width: "50%",
    alignSelf: "center"
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  outer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    margin: 0
  },
  form: {
    display: "flex",
    flexDirection: "column"
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
          <div>
            <h2>Good news {this.state.res.name} </h2>
            <h2> Your message is on the way ...</h2>
            <Button className={classes.button} href="/">
              Home
            </Button>
          </div>
        ) : (
          <form
            onSubmit={this.submit}
            className={classes.container}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-name"
              label="Name"
              name="name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-email"
              label="Email"
              name="email"
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange("email")}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-textarea"
              label="Message"
              placeholder="Enter your message here!"
              name="message"
              multiline
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <Button className={classes.button} id="submit" type="submit">
              Get in touch
            </Button>
          </form>
        )}
      </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
