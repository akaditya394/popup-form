import React from 'react';
import styles from "./Error.module.css";

function Error(props) {
  return (
    <div className={styles.main}><p>{props.children}</p></div>
  )
}

export default Error;