import React, { Component } from "react";
import Monster from "../../components/Monster";
import { firestore } from "../../firebase";
import styles from "./GameBoard.module.scss";
import Card from "../../components/Card";
import Button from "../../components/Button";

class GameBoard extends Component {
  state = {
    monsters: [],
    playerhp: this.props.card.hp,
    monsterhp: "" // working on it
  };

  componentDidMount() {
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
  }

  attackCycle = () => {
    console.log(this.state.playerhp);
    let hp = this.state.monsters[0].hp;
    hp -= 2;
    this.setState({
      monsterhp: hp
    });
    console.log(this.state.monsterhp); //thinking hard :D
  };

  render() {
    return (
      <div className={styles.gameBoard}>
        <div className={styles.cardSection}>
          <Card
            selectChar={null}
            isSelected={false}
            value={this.props.name}
            description={this.props.card.description}
            name={this.props.card.name}
            combatexp={this.props.card.combatexp}
            luck={this.props.card.luck}
            hp={this.props.card.hp}
            willpower={this.props.card.willpower}
            img={this.props.card.img}
            key={this.props.index}
          ></Card>
          <section className={styles.combatHandlers}>
            <Button onClick={this.attackCycle} name={"Attack"}></Button>
            <Button name={"Run.."}></Button>
          </section>
        </div>

        <div className={styles.monsterSection}>
          {this.state.monsters.map((monsters, index) => (
            <Monster
              description={monsters.description}
              name={monsters.name}
              combatexp={monsters.combatexp}
              hp={(monsters.hp -= this.state.monsterhp)} //will figure it out
              img={monsters.img}
              key={index}
            ></Monster>
          ))}
        </div>
        <section className={styles.directions}>
          <Button disabled={true} name={"Proceed inside"}></Button>
          <Button disabled={true} name={"Check the backyard"}></Button>
        </section>
      </div>
    );
  }
}

export default GameBoard;
