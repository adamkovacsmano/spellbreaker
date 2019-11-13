import React, { Component } from "react";
import styles from "./Button.module.scss";

class Button extends Component {
  state = {};
  render() {
    return <button style={{ cursor: "pointer" }}>{this.props.name}</button>;
  }
}

export default Button;
