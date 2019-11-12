import React, {Component} from "react";

class NameInput extends Component{
  state = {};

  render(){
    return(
      <input onChange={this.props.onChange} type="text" maxlength="8"></input>
    );
  }
}

export default NameInput;