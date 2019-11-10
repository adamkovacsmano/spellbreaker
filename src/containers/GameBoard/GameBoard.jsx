import React, {Component} from "react";
import Card from "../../components/Card";
import styles from "./GameBoard.module.scss";
import { firestore } from "../../firebase";
import Monster from "../../components/Monster";

class GameBoard extends Component {
  state = {
    cards: [],
    monsters:[]
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
  }

  render() {
    return (
      <div className={styles.board}>
        <h1 className={styles.title}>Spellbreaker</h1>
       <div className={styles.cardSection}>
        {this.state.cards.map((cards, index) => (
          <Card
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