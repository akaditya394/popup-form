import React from "react";
import styles from "./Home.module.css";

import Button from "../../components/Button/Button";

function Home() {
  return (
    <div className={styles.main}>
      <div><Button>Register</Button></div>
    </div>
  );
}

export default Home;