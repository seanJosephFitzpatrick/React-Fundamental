import React, { Component } from "react";

class LifecycleMethods extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static getderivedStatefromProps(props, state) {}

  getSnapshotbeforeUpdate() {}

  componentDidMount() {}

  shouldComponentUpdate() {}
}

export default LifecycleMethods;
