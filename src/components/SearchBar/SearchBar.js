import React from "react";

import styles from "./SearchBar.module.css";

function searchBar(props) {
  return (
    <input
      type="search"
      placeholder="search"
      className={styles.bar}
      onChange={e => props.onsearch(e.target.value)}
    ></input>
  );
}

export default searchBar;
