import React, { useState, useRef } from "react";
import styles from "./Form.module.css";

import Button from "../Button/Button";

function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const addressRef = useRef();

  const [formIsValid, setFormIsValid] = useState(false);

  const submitHandler = () => {
    var name = nameRef.current.value;
    var email = emailRef.current.value;
    var mobile = mobileRef.current.value;
    var address = addressRef.current.value;

    //validation logic

    if (name.length === 0) {
      alert("Name field is required!");
    }

    if (email.length === 0) {
      alert("Email field is required!");
    }
    if (!email.includes("@")) {
      alert("Enter a valid email address!");
    }

    if (mobile.length === 0) {
      alert("Mobile Number is required!");
    }

    if (address.length === 0) {
      alert("Address field is required!");
    }

    if (
      name.length > 0 &&
      email.length > 0 &&
      mobile.length > 0 &&
      address.length > 0
    ) {
      setFormIsValid(true);
    } else {
      alert("All fields are mandatory!");
    }

    if (formIsValid) {
      alert(
        "Entered Name: " +
          name +
          "\n" +
          "Entered Email ID: " +
          email +
          "\n" +
          "Entered Mobile No. " +
          mobile +
          "\n" +
          "Entered Address: " +
          address
      );
      setFormIsValid(false);
    }
  };

  return (
    <div className={styles.main}>
      <div>
        <h1>Contact Form</h1>
      </div>
      <input
        ref={nameRef}
        name="Name"
        id="name"
        type="text"
        placeholder="Name"
      />
      <input
        ref={emailRef}
        name="Email"
        id="email"
        type="email"
        placeholder="Email"
      />
      <input
        ref={mobileRef}
        name="Mobile No."
        id="tel"
        type="number"
        placeholder="Mobile No."
      />
      <input
        ref={addressRef}
        name="Address"
        id="address"
        type="address"
        placeholder="Address"
      />
      <div>
        <Button onClick={submitHandler} type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Form;
