import React, { Component } from "react";
import Monster from "../../components/Monster";
import { firestore } from "../../firebase";
import styles from "./GameBoard.module.scss";
import Card from "../../components/Card";
import Button from "../../components/Button";

class GameBoard extends Component {

  state = {
    monsters: []
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

  render() {
    return (
      <>
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

          {/* <Button name={"Attack"}></Button>
          <Button name={"Run.."}></Button> */}
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

      </>
    );
  }
}

export default GameBoard;