import React, { Component } from "react";
import EmbarkPage from "../EmbarkPage";
import GameBoard from "../GameBoard";

class App extends Component {
  state={
    name: "",
    card: ""
  }

  handleEmbark = (name, card) =>{
    this.setState({
      name: name,
      card: card
    })
  }


  render() {
    if(this.state.name === ""){
      return <EmbarkPage onComplete={this.handleEmbark} />
    } else {
      return <GameBoard name={this.state.name} card={this.state.card}/>
    }
    
    
  }
}

export default App;
