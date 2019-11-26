import React from "react";

import styles from "./SearchBar.module.css";

function searchBar(props) {
  return (
    <input type="search" placeholder="search" className={styles.bar}></input>
  );
}

export default searchBar;
