import React from "react";

import styles from "./Todo.module.css";

function todo(props) {
  const elem = props.checked ? (
    <div className={styles.checkbox}>Completed!!</div>
  ) : null;

  const doneElem = props.edited ? (
    <button
      className={styles.done}
      value={props.value}
      onClick={e => props.ondone(e.target, props.value)}
    >
      done
    </button>
  ) : null;

  return (
    <div className={styles.wrapper}>
      <div
        className={
          props.checked
            ? styles.leftContent + " " + styles.completed
            : styles.leftContent
        }
      >
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={e => props.oncheck(props.value, e.target.checked)}
        ></input>

        <div
          contentEditable={props.edited ? true : false}
          className={
            props.edited ? styles.title + " " + styles.edited : styles.title
          }
        >
          {props.title}
        </div>
        <div
          contentEditable={props.edited ? true : false}
          className={
            props.edited
              ? styles.description + " " + styles.edited
              : styles.description
          }
        >
          {props.description}
        </div>
      </div>
      <div className={styles.buttons}>
        {elem}
        {doneElem}
        <button
          className={styles.edit}
          value={props.value}
          onClick={() => props.onedit(props.value)}
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
