import React, { Component } from "react";
import EmbarkPage from "../EmbarkPage";
import GameBoard from "../GameBoard";

class App extends Component {
  // inserting dummy data lets you render GameBoard straight-up for styling and stuff
  state = {
    name: "Dannyboi",
    card: {
      selectChar: null,
      isSelected: false,
      value: "asas",
      description:
        "..remember throughout your journeys... the barbarians have the most             amount of vitality, but they lack in willpower",
      name: "the Barbarian",
      combatexp: 6,
      luck: 6,
      hp: 14,
      willpower: 6,
      img:
        "https://www.geek.com/wp-content/uploads/2017/04/female-barbarians-650x366.jpg"
    }
  };

  handleEmbark = (name, card) => {
    this.setState({
      name: name,
      card: card
    });
  };

  render() {
    if (this.state.name === "") {
      return <EmbarkPage onComplete={this.handleEmbark} />;
    } else {
      return <GameBoard name={this.state.name} card={this.state.card} />;
    }
  }
}

export default App;
