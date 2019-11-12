import React, { Component } from "react";
import styles from "./Card.module.scss";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className={styles.cardContainer} style={{cursor: "pointer"}}>
        <h1>{this.props.playername} {this.props.name}</h1>
        <img src={this.props.img} alt="character-pic"></img>
        <section>
          <p>{this.props.description}</p>
        </section>
        <section className={styles.attributes}>
          <table>
            <tr>
              <th>Combat expertise</th>
              <td>{this.props.combatexp}</td>
            </tr>
            <tr>
              <th>Willpower</th>
              <td>{this.props.willpower}</td>
            </tr>
            <tr>
              <th>Luck</th>
              <td>{this.props.luck}</td>
            </tr>
          </table>
        </section>
        <section>
          <tr className={styles.hp}>
            <tr>HP:</tr>
            <td>{this.props.hp}</td>
          </tr>
        </section>
      </div>
    );
  }
}

export default Card;
