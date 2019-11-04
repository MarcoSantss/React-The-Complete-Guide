import React, { Component } from "react";
import "./App.css"; //https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet
import Cockpit from "./../Components/Cockpit/Cockpit";
import Persons from "./../Components/Persons/Persons";

class App extends Component {
  // Initialize state values, don't use setState because the state doesn't exists
  // creation: 1
  constructor(props) {
    super(props); // Always needed
    //this.state = { showPersons: false }
    console.log("[App.js] constructor");
  }

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

  // Updates state from props changes
  // creation: 2
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // Needs to return true or false
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  }

  // Do side-effects
  // creation: 4
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

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

  // creation: 3
  render() {
    console.log("[App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons persons={this.state.persons} clicked={this.deletePersons} />
      );
    }

    return (
      <div className="App">
        <Cockpit
          title={this.props.title}
          persons={this.state.persons}
          showOrNotPersons={() => this.showOrNotPersons()}
        />
        {persons}
      </div>
    );
  }
}

export default App;
