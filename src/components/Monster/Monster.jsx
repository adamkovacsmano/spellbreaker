import React, { Component } from "react";
import styles from "./Monster.module.scss";

class Monster extends Component{
  state = {};

  render(){
    return(
      <div className={styles.monsterContainer} style={{cursor: "pointer"}}>
        <h1>{this.props.name}</h1>
        <img src={this.props.img} alt="monster-pic"></img>
        <section className={styles.content}>
          <p>{this.props.description}</p>
          <tr className={styles.attributes}>
            <div>
              <tr>Combat expertise:</tr>
              <td>{this.props.combatexp}</td>
            </div>
            <div>
              <tr>HP:</tr>
              <td>{this.props.hp}</td>
            </div>
          </tr>
        </section>
      </div>
    );
  }
}

export default Monster;