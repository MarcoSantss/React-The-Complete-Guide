import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Marco",
        age: 24,
        hobbie: "My hobbie is play video games"
      },
      {
        name: "Sara",
        age: 19,
        hobbie: "My hobbie is read books"
      }
    ],
    showPersons: false
  };

  showOrNotPersons = () => {
    if (this.state.persons.length === 0) {
      this.setState({
        persons: [
          {
            name: "Marco",
            age: 24,
            hobbie: "My hobbie is play video games"
          },
          {
            name: "Sara",
            age: 19,
            hobbie: "My hobbie is read books"
          }
        ]
      });
    }
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePersons = index => {
    let newPersons = [...this.state.persons];
    newPersons.splice(index, 1);
    this.setState({
      persons: newPersons
    });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => (
        <Person
          name={person.name}
          age={person.age}
          click={() => this.deletePersons(index)}
        />
      ));
    }

    return (
      <div className="App">
        <h1>React App!</h1>
        <button onClick={this.showOrNotPersons}>Show persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
