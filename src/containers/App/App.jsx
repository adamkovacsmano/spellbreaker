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
          //spread operator
        });
        // console.log(cards);
        this.setState({
          cards: cards
        });
      });
  }

  render() {
    return (
      <div className={styles.app}>
        {this.state.cards.map((cards, index) => (
          <Card
            description={cards.description}
            name={cards.name}
            key={index}
          ></Card>
        ))}
      </div>
    );
  }
}

export default App;
