import React from "react";
import styles from "./Home.module.css";

import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

function Home() {
  return (
    <div className={styles.main}>
      <Modal />
      <div>
        <Button className={styles.button}>Register</Button>
      </div>
    </div>
  );
}

export default Home;
