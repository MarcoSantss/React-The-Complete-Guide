import React, { useEffect } from "react";

const cockpit = props => {
  // Similar to componentDidMount and componentDidUpdate:
  // Executes for every render syncle
  // We can have many useEffect
  useEffect(() => {
    console.log("[cockpit.js] useEffect");
    // Http request...
  }, [props.persons]); // Now useEffect should only be executed when props.persons change, if its an empty arrray, it will only execute one time in the beggining

  const style = {
    backgroundColor: "black",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };
  const classes = [];
  if (props.persons.length <= 1) {
    classes.push("red");
  } else {
    classes.push("gray");
  }
  return (
    <div>
      <h1 className={classes.join(" ")}>{props.title}</h1>
      <button style={style} onClick={props.showOrNotPersons}>
        Show persons
      </button>
    </div>
  );
};

export default cockpit;
