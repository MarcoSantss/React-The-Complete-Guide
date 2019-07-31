import React from "react";
import Radium from "radium";
import "./Person.css";

const Person = props => {
  const style = {
    "@media (max-width: 500px)": {
      width: "150px"
    }
  };
  return (
    <div className="Person" style={style} onClick={props.click}>
      <p>I'm {props.name}!</p>
      <p>I got {props.age} yrs old</p>
    </div>
  );
};

export default Radium(Person);
