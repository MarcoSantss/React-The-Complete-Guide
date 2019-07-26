import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "marco"
      }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        {
          name: "ana"
        }
      ]
    });
  };

  newChangeHandler = event => {
    this.setState({
      persons: [
        {
          name: event.target.value
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          change={this.newChangeHandler}
        >
          My hobbie is playing video games
        </Person>
      </div>
    );
  }
}

export default App;
