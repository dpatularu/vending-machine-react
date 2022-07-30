import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/MessageOutput.module.scss";

const MessageOutput = ({ itemSelection, message, makePurchase }) => {
  return (
    <div className={styles.container}>
      <h3>Messages</h3>
      <div className={styles.output}>{message}</div>
      <div className={styles.inputContainer}>
        <p>Item: </p>
        <div className={styles.selectionOutput}>{itemSelection}</div>
      </div>
      <button onClick={() => makePurchase()}>Make Purchase</button>
      <hr />
    </div>
  );
};

export default MessageOutput;
