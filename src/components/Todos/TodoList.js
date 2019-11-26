import React from "react";

import styles from "./TodoList.module.css";

import Todo from "../Todo/Todo";

function todos(props) {
  const todos = props.todo_data.map((todo, key) => (
    <Todo
      description={todo.desc}
      title={todo.title}
      key={key}
      value={todo.id}
      ondelete={props.ondelete}
      onedit={props.onedit}
      oncheck={props.oncheck}
      checked={todo.checked}
    ></Todo>
  ));

  return <div className={styles.listWrapper}>{todos}</div>;
}

export default todos;
