import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className="Person" onClick={props.click}>
      <p>I'm {props.name}!</p>
      <p>I got {props.age} yrs old</p>
    </div>
  );
};

export default Person;
