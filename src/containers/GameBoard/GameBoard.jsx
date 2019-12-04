import React, { Component } from "react";
import Monster from "../../components/Monster";
import { firestore } from "../../firebase";
import styles from "./GameBoard.module.scss";
import Card from "../../components/Card";
import Button from "../../components/Button";

class GameBoard extends Component {
  state = {
    locations: [],
    playerHp: this.props.card.hp,
    monsterHp: 0,
    currentLocation: null
  };

  componentDidMount() {
    firestore
      .collection("locations")
      .get()
      .then(querySnapshot => {
        const locations = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id };
        });
        this.setState({
          locations: locations,
          currentLocation: "chapel"
        });
        this.setState({
          monsterHp: this.getCurrentLocation().monsterHp
        });
      });
  }

  getLocationById = id => {
    return this.state.locations.filter(location => location.docId === id)[0];
  };

  getCurrentLocation = () => {
    return this.getLocationById(this.state.currentLocation);
  };

  renderMonster = () => {
    const currentLocation = this.getCurrentLocation();
    if (currentLocation != null && currentLocation.monsterName !== "") {
      return (
        <div className={styles.monsterSection}>
          <Monster
            description={currentLocation.monsterDescription}
            name={currentLocation.monsterName}
            combatexp={currentLocation.monsterCombatexp}
            hp={this.state.monsterHp}
            img={currentLocation.monsterImg}
          ></Monster>
        </div>
      );
    }
  };

  attackCycle = () => {
    const playerChance =
      this.props.card.combatexp + Math.floor(Math.random() * 11 + 2);
    const monsterChance =
      this.getCurrentLocation().monsterCombatexp +
      Math.floor(Math.random() * 11 + 2);
    console.log(playerChance, monsterChance);

    if (playerChance > monsterChance) {
      this.setState({ monsterHp: this.state.monsterHp - 2 });
    } else if (playerChance < monsterChance) {
      this.setState({ playerHp: this.state.playerHp - 2 });
    }

    if (this.state.playerHp <= 0) {
      alert("you are dead");
    }
  };

  render() {
    const currentLocation = this.getCurrentLocation();
    const bg = {
      backgroundImage: `url(${
        currentLocation ? currentLocation.background : ""
      })`
    };

    return (
      <div className={styles.gameBoard} style={bg}>
        <div className={styles.cardSection}>
          <Card
            selectChar={null}
            isSelected={false}
            value={this.props.name}
            description={this.props.card.description}
            name={this.props.card.name}
            combatexp={this.props.card.combatexp}
            luck={this.props.card.luck}
            hp={this.state.playerHp}
            willpower={this.props.card.willpower}
            img={this.props.card.img}
            key={this.props.index}
          ></Card>
          <section className={styles.combatHandlers}>
            <Button
              onClick={this.attackCycle}
              name={"Attack"}
              disabled={this.state.monsterHp <= 0}
            ></Button>
            <Button
              name={"Run.."}
              disabled={this.state.monsterHp <= 0}
            ></Button>
          </section>
        </div>

        {this.renderMonster()}
        <section className={styles.directions}>
          <Button
            disabled={this.state.monsterHp > 0}
            name={"Proceed inside"}
          ></Button>
          <Button
            disabled={this.state.monsterHp > 0}
            name={"Check the backyard"}
          ></Button>
        </section>
      </div>
    );
  }
}

export default GameBoard;
