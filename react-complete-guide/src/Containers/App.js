import React, { Component } from "react";
import "./App.css"; //https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet
import Cockpit from "./../Components/Cockpit/Cockpit";
import Persons from "./../Components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Marco",
        age: 24,
        hobbie: "My hobbie is play video games"
      },
      {
        id: 2,
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
      persons = (
        <Persons persons={this.state.persons} clicked={this.deletePersons} />
      );
    }

    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          showOrNotPersons={() => this.showOrNotPersons()}
        />
        {persons}
      </div>
    );
  }
}

export default App;
