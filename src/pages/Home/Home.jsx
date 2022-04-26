import React, { useState } from "react";
import styles from "./Home.module.css";

import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

function Home() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = (event) => {
    setClicked(!clicked);
  };
  return (
    <div className={styles.main}>
      {clicked && <Modal />}
      <div>
        <Button onClick={clickHandler} className={styles.button}>
          Register
        </Button>
      </div>
    </div>
  );
}

export default Home;
