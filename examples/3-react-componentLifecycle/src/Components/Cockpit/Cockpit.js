import React from "react";

const cockpit = props => {
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
