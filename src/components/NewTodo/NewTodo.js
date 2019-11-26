import React from "react";

import styles from "./NewTodo.module.css";

function NewTodo(props) {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.newTodo} onClick={props.onnew}>
        +
      </button>
    </div>
  );
}

export default NewTodo;
