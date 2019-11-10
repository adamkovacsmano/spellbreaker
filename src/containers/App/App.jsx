import React, { Component } from "react";
import styles from "./App.module.scss";
import Card from "../../components/Card";
import { firestore } from "../../firebase";

class App extends Component {
  state = {
    cards: []
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
  }

  render() {
    return (
      <div className={styles.app}>
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
      </div>
    );
  }
}

export default App;
