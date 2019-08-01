import React, { Component } from "react";
import "./App.css"; //https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
    const style = {
      backgroundColor: "black",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "green",
        color: "black"
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => (
        <ErrorBoundary key={person.id}>
          <Person
            name={person.name}
            age={person.age}
            click={() => this.deletePersons(index)}
          />
        </ErrorBoundary>
      ));
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "lightgreen",
        color: "gray"
      };
    }

    const classes = [];
    if (this.state.persons.length <= 1) {
      classes.push("red");
    } else {
      classes.push("gray");
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1 className={classes.join(" ")}>React App!</h1>
          <button style={style} onClick={this.showOrNotPersons}>
            Show persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
