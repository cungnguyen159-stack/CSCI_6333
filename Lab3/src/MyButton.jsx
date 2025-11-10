import React, { Component } from "react";

class MyButton extends Component {
  constructor() {
    super();
    this.state = { message: "Hello!" };

    // Binding 'this' to make sure it's always the class
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(this.state.message);
  }

  render() {
    return <button onClick={this.handleClick}>Click me!</button>;
  }
}

export default MyButton;