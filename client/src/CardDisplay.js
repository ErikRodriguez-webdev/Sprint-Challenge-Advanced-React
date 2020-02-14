import React from "react";
import "./App.css";

const CardDisplay = (props) => {
  return (
    <div key={props.key} className="aCard">
      <h3>{props.name}</h3>
      <h4>{props.country}</h4>
    </div>
  );
};

export default CardDisplay;
