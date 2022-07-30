import React from "react";
import styles from "../styles/CoinInput.module.scss";

const CoinInput = ({ money, setMoney }) => {
  return (
    <div className={styles.coinInputContainer}>
      <h3>Total $ In</h3>
      <div className={styles.output}>${money.toFixed(2)}</div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setMoney(Math.round((money + 0.25) * 100) / 100)}
        >
          Add Quarter
        </button>
        <button onClick={() => setMoney(Math.round((money + 0.1) * 100) / 100)}>
          Add Dime
        </button>
        <button
          onClick={() => setMoney(Math.round((money + 0.05) * 100) / 100)}
        >
          Add Nickel
        </button>
        <button
          onClick={() => setMoney(Math.round((money + 0.01) * 100) / 100)}
        >
          Add Penny
        </button>
      </div>
      <hr />
    </div>
  );
};

export default CoinInput;
