import React from "react";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.id} />
      <input
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        type={props.type}
      />
    </div>
  );
}

export default Input;
