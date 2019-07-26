import React from "react";

const Person = props => {
  return (
    <div>
      <p>Hi {props.name}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} />
    </div>
  );
};

export default Person;
