import React from "react";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.name}</label>
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    </div>
  );
}

export default Input;
