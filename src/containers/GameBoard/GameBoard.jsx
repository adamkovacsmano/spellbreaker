import React, { Component } from "react";
import Card from "../../components/Card";
import styles from "./GameBoard.module.scss";
import { firestore } from "../../firebase";
import Monster from "../../components/Monster";
import NameInput from "../../components/NameInput";
import Button from "../../components/Button";

class GameBoard extends Component {
  state = {
    cards: [],
    monsters: [],
    value: "",
    palyername: "",
    isSelected: false
  };

  componentDidMount() {
    firestore
      .collection("characters")
      .get()
      .then(querySnapshot => {
        const cards = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id };
        });
        this.setState({
          cards: cards
        });
      });
    firestore
      .collection("monsters")
      .get()
      .then(querySnapshot => {
        const monsters = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id };
        });
        this.setState({
          monsters: monsters
        });
      });
    document.addEventListener("keydown", this.enterName, false);
  }

  onTextInput = event => {
    let value = event.target.value;
    this.setState({ value });
  };

  enterName = event => {
    if (event.keyCode === 13) {
      this.setState({ playername: this.state.value });
    }
  };

  // deSelect = event => {
  //   // this.state.cards.map((cards, index) => console.log(isSelected, cards));
  //   // console.log(isSelected);
  //   console.log(event);
  // };

  render() {
    return (
      <div className={styles.board}>
        <section className={styles.title}>
          <h1>Spellbreaker</h1>
          <p>enter your name traveller..</p>
          <NameInput onChange={this.onTextInput}></NameInput>
          <div>
            <Button name={"Embark"}></Button>
          </div>
        </section>
        <div className={styles.cardSection}>
          {this.state.cards.map((cards, index) => (
            <Card
              playername={this.state.playername}
              description={cards.description}
              name={cards.name}
              combatexp={cards.combatexp}
              luck={cards.luck}
              hp={cards.hp}
              willpower={cards.willpower}
              img={cards.img}
              key={index}
            ></Card>
          ))}
        </div>
        <div className={styles.monsterSection}>
          {this.state.monsters.map((monsters, index) => (
            <Monster
              description={monsters.description}
              name={monsters.name}
              combatexp={monsters.combatexp}
              hp={monsters.hp}
              img={monsters.img}
              key={index}
            ></Monster>
          ))}
        </div>
      </div>
    );
  }
}

export default GameBoard;
