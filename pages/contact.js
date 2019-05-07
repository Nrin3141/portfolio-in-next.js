import React from "react";
import Link from "next/link";
import Menu from "../components/Menu";
import Header from "../components/Headers";
import { colors } from "../config/colors.js";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submit = e => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      message: e.target.message.value,
      name: e.target.name.value
    };
    fetch("/contact", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => this.setState({ res })); //assign state to array res
  };
  componentDidUpdate = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div id="outer">
        <Header />
        <Menu />
        {this.state.res ? (
          <div id="container">
            <h2>
              Good news {this.state.res.name} <br /> Your message is on the way
              to Rico ...
            </h2>
            <Link href="/">
              <a title="Home">Home</a>
            </Link>
          </div>
        ) : (
          <form onSubmit={this.submit} method="post">
            <label>Email </label>

            <input
              type="email"
              placeholder="Enter your E-Mail address"
              name="email"
            />
            <label>Name </label>

            <input type="text" placeholder="Enter your name" name="name" />
            <textarea
              name="message"
              placeholder="What do you want to tell me?"
              rows="10"
              cols="30"
            />
            <button id="submit" type="submit">
              Get in touch
            </button>
          </form>
        )}
        <style jsx>{`
          h2 {
            text-align: center;
            color: ${colors.lightblue}
          }
          #outer {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            margin: 0;
            background: ${colors.dark};
          }
          form {
            display: flex;
            flex-direction: column;
            background: ${colors.lightblue};
            padding: 20px 10vw;
            border-radius: 5%;
            }
          }
          form > * {
            margin: 20px;

          }
          form > label {
            text-align: center;
            margin: 0px;
          }
          input,
          textarea {
            -webkit-box-shadow: 0px 10px 16px -4px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 10px 16px -4px rgba(0,0,0,0.75);
            box-shadow: 0px 10px 16px -4px rgba(0,0,0,0.75);
            text-align: center;
            margin: 5px;
            border: none;
            padding: 5px;
            border-radius: 4%;

          }

          a,
          #submit {
            background: ${colors.metal};
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
          }
          #container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}

export default Contact;
