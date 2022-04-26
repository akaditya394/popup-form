import React from "react";
import styles from "./Form.module.css";

import Button from "../Button/Button";

function Form() {
  return (
    <div className={styles.main}>
      <div>
        <h1>Contact Form</h1>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="tel">Mobile No.</label>
        <input id="tel" type="tel" placeholder="Mobile No." />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input id="address" type="address" placeholder="Address" />
      </div>
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </div>
  );
}

export default Form;
