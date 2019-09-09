import React, { Component } from "react";

class ChangingState extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleClick = event => {
    this.setState(preveState => {
      return {
        count: preveState.count + 1
      };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change</button>
      </div>
    );
  }
}

export default ChangingState;
