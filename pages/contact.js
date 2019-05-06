import React from "react";
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
    return this.state.res ? (
      <div>
        <h2>{"Email: " + this.state.res.email}</h2>
        <h2>{"Name: " + this.state.res.name}</h2>
        <h2>{"Message: " + this.state.res.message}</h2>
        <h2>Success!!!</h2>
      </div>
    ) : (
      <form onSubmit={this.submit} method="post">
        <input
          type="email"
          placeholder="Enter your E-Mail address"
          defaultValue="a@a.de"
          name="email"
        />
        <input
          type="text"
          placeholder="Enter your name"
          defaultValue="Client"
          name="name"
        />
        <input
          type="textarea"
          placeholder="Enter your message"
          defaultValue="Hello world"
          name="message"
        />
        <input type="submit" value="Get in touch" />
      </form>
    );
  }
}

export default Contact;
