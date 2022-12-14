import { useState } from "react";
import styles from "../styles/ChangeOutput.module.scss";

const ChangeOutput = ({ coins, setCoins }) => {
  const [change, setChange] = useState("");
  const displayChange = () => {
    let change = "";
    change = change.concat(
      coins.quarters !== 0
        ? `${coins.quarters} ${coins.quarters !== 1 ? "Quarters" : "Quarter"} `
        : ""
    );
    change = change.concat(
      coins.dimes !== 0
        ? `${coins.dimes} ${coins.dimes !== 1 ? "Dimes" : "Dime"} `
        : ""
    );
    change = change.concat(
      coins.nickels !== 0
        ? `${coins.nickels} ${coins.nickels !== 1 ? "Nickels" : "Nickel"} `
        : ""
    );
    change = change.concat(
      coins.pennies !== 0
        ? `${coins.pennies} ${coins.pennies !== 1 ? "Pennies" : "Penny"} `
        : ""
    );
    return change;
  };
  return (
    <div className={styles.container}>
      <h3>Change</h3>
      <div className={styles.output}>{displayChange()}</div>
      <button
        onClick={() =>
          setCoins({
            dimes: 0,
            nickels: 0,
            pennies: 0,
            quarters: 0,
          })
        }
      >
        Return Change
      </button>
    </div>
  );
};

export default ChangeOutput;
