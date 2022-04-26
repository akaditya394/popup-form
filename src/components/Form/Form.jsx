import React from "react";
import styles from "./Form.module.css";

import Button from "../Button/Button";
import Input from "../Input/Input";

function Form() {
  return (
    <div className={styles.main}>
      <div>
        <h1>Contact Form</h1>
      </div>
      <Input name="Name" id="name" type="text" placeholder="Name" />
      <Input name="Email" id="email" type="email" placeholder="Email" />
      <Input name="Mobile No." id="tel" type="tel" placeholder="Mobile No." />
      <Input name="Address" id="address" type="address" placeholder="Address" />
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </div>
  );
}

export default Form;
