import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] redering...");
    return (
      <div className="Person" onClick={this.props.click}>
        <p>I'm {this.props.name}!</p>
        <p>I got {this.props.age} yrs old</p>
      </div>
    );
  }
}

export default Person;
