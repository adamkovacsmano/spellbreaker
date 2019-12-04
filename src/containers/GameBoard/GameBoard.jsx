import React, { Component } from "react";
import Monster from "../../components/Monster";
import { firestore } from "../../firebase";
import styles from "./GameBoard.module.scss";
import Card from "../../components/Card";
import Button from "../../components/Button";

class GameBoard extends Component {
  state = {
    monsters: [],
    monster: ""
  };

  componentDidMount() {
    firestore
      .collection("monsters")
      .get()
      .then(querySnapshot => {
        const monstersFromDatabase = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id };
        });
        this.setState({
          monsters: monstersFromDatabase
        });
      });
  }

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
          {this.state.monsters.map((monster, index) => (
            <Monster
              description={monster.description}
              name={monster.name}
              combatexp={monster.combatexp}
              hp={monster.hp}
              img={monster.img}
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
