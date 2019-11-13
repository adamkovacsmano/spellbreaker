import React, { Component } from "react";
import Card from "../../components/Card";
import styles from "./EmbarkPage.module.scss";
import { firestore } from "../../firebase";
import Monster from "../../components/Monster";
import NameInput from "../../components/NameInput";
import Button from "../../components/Button";

class EmbarkPage extends Component {
  state = {
    cards: [],
    monsters: [],
    value: "",
    playername: "",
    selectedCard: ""
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

  handleEmbarkClick = () => {
    // this.setState({
    //   playername: this.state.value, 
    //   cards: this.state.cards.filter(card => this.state.selectedCard === card.name)
    this.props.onComplete(this.state.value, this.state.cards.filter(card => this.state.selectedCard === card.name)[0]);
  }

  selectChar = name => {
    this.setState({ selectedCard: name });
  };

  render() {
    return (
      <div className={styles.board}>
        <section className={styles.title}>
          <h1>Spellbreaker</h1>
          <p>enter your name and choose a character</p>
          <NameInput onChange={this.onTextInput}></NameInput>
          <div>
            <Button disabled={this.state.value === "" || this.state.selectedCard === ""} onClick={this.handleEmbarkClick} name={"Embark"}></Button>
          </div>
        </section>
        <div className={styles.cardSection}>
          {this.state.cards.map((card, index) => (
            <Card
              selectChar={this.selectChar}
              isSelected={this.state.selectedCard === card.name}
              playername={this.state.playername}
              description={card.description}
              name={card.name}
              combatexp={card.combatexp}
              luck={card.luck}
              hp={card.hp}
              willpower={card.willpower}
              img={card.img}
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

export default EmbarkPage;
