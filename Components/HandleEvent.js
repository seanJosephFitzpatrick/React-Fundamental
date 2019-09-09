import React, { Component } from "react";

class HandleEvent extends Component {
  handleClick() {
    console.log("I was clicked");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default HandleEvent;
