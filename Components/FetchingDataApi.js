import React, { Component } from "react";

class FetchingDataApi extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      character: {}
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          character: data
        });
      });
  }

  render() {
    const text = this.state.isLoading
      ? "Loading..."
      : this.state.character.name;
    return (
      <div>
        <h1>{text}</h1>
      </div>
    );
  }
}

export default FetchingDataApi;
