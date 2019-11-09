import React, { Component } from "react";
import styles from "./App.module.scss";
import Card from "../../components/Card";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Card />
      </div>
    );
  }
}

export default App;
