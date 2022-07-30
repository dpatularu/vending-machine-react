import React from "react";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Vending Machine</h1>
        <hr />
      </header>
    </>
  );
};

export default Header;
