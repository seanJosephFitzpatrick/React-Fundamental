import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }
  render() {
    let displayText = this.state.isLoggedIn
      ? "You are logged in"
      : "You are logged out";
    return <h1>{displayText}</h1>;
  }
}

export default State;
