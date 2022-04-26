import React, { useState } from "react";
import styles from "./Form.module.css";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Error from "../Error/Error";

function Form(props) {
  const [inputDetail, setInputDetail] = useState({
    inputName: "",
    inputEmail: "",
    inputMobile: "",
    inputAddress: "",
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const nameChangeHandler = (e) => {
    if (e.target.value.length > 0) {
      setInputDetail((prevState) => {
        return { ...prevState, inputName: e.target.value };
      });
    }
  };

  const emailChangeHandler = (e) => {
    if (e.target.value.length > 0) {
      setInputDetail((prevState) => {
        return { ...prevState, inputEmail: e.target.value };
      });
    }
  };

  const mobileChangeHandler = (e) => {
    if (e.target.value.length > 0) {
      setInputDetail((prevState) => {
        return { ...prevState, inputMobile: e.target.value };
      });
    }
  };

  const addressChangeHandler = (e) => {
    if (e.target.value.length > 0) {
      setInputDetail((prevState) => {
        return { ...prevState, inputAddress: e.target.value };
      });
    }
  };

  const submitHandler = (event) => {
    console.log(inputDetail);
    console.log(formIsValid);

    if (
      inputDetail.inputName.length > 0 &&
      inputDetail.inputEmail.length > 0 &&
      inputDetail.inputMobile.length > 0 &&
      inputDetail.inputAddress.length > 0
    ) {
      setFormIsValid(true);
    }

    if (formIsValid) {
      alert(
        inputDetail.inputName +
          " " +
          inputDetail.inputEmail +
          " " +
          inputDetail.inputMobile +
          " " +
          inputDetail.inputAddress
      );

      setInputDetail({
        inputName: "",
        inputEmail: "",
        inputMobile: "",
        inputAddress: "",
      });

      setFormIsValid(false);
    }
  };

  return (
    <div className={styles.main}>
      <div>
        <h1>Contact Form</h1>
      </div>
      <Input
        onChange={nameChangeHandler}
        value={inputDetail.inputName}
        name="Name"
        id="name"
        type="text"
        placeholder="Name"
      />
      <Input
        onChange={emailChangeHandler}
        value={inputDetail.inputEmail}
        name="Email"
        id="email"
        type="email"
        placeholder="Email"
      />
      <Input
        onChange={mobileChangeHandler}
        value={inputDetail.inputMobile}
        name="Mobile No."
        id="tel"
        type="tel"
        placeholder="Mobile No."
      />
      <Input
        onChange={addressChangeHandler}
        value={inputDetail.inputAddress}
        name="Address"
        id="address"
        type="address"
        placeholder="Address"
      />
      <div>
        <Button
          onClick={() => {
            submitHandler();
          }}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Form;
