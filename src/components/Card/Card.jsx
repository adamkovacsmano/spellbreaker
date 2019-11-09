import React, { Component } from "react";
import styles from "./Card.module.scss";
import barbarian from "../../Images/barbarian.jpg";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className={styles.cardContainer}>
        <h1>Liam the Barbarian</h1>
        <img src={barbarian} alt="barbarian"></img>
        <section>
          <p>
            ..remember throughout your journeys... the barbarians have the most
            amount of vitality, but they lack in willpower
          </p>
        </section>
        <section className={styles.attributes}>
          <table>
            <tr>
              <th>Combat expertise</th>
              <td>6</td>
            </tr>
            <tr>
              <th>Willpower</th>
              <td>6</td>
            </tr>
            <tr>
              <th>Luck</th>
              <td>6</td>
            </tr>
          </table>
        </section>
        <section>
          <tr className={styles.hp}>
            <tr>HP:</tr>
            <td>14</td>
          </tr>
        </section>
      </div>
    );
  }
}

export default Card;
