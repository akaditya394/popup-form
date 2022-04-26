import React from "react";
import styles from "./Modal.module.css";

import Form from "../Form/Form";

function Modal(props) {
  return (
    <div className={styles.main}>
      <Form />
    </div>
  );
}

export default Modal;
