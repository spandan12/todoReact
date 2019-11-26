import React from "react";

import styles from "./Todo.module.css";

function todo(props) {
  const elem = props.checked ? (
    <div className={styles.checkbox}>Completed!!</div>
  ) : (
    <input
      type="checkbox"
      className={styles.checkbox}
      onChange={() => props.oncheck(props.value)}
    ></input>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftContent}>
        {elem}
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.edit}
          value={props.value}
          onClick={props.onedit}
        >
          <i className="fa fa-edit"></i>
        </button>
        <button
          className={styles.delete}
          value={props.value}
          onClick={() => props.ondelete(props.value)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default todo;
