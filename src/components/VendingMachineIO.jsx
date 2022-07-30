import { useState } from "react";
import axios from "axios";
import CoinInput from "./CoinInput";
import MessageOutput from "./MessageOutput";
import ChangeOutput from "./ChangeOutput";
import styles from "../styles/VendingMachineIO.module.scss";

const VendingMachineIO = ({ itemSelection }) => {
  const [money, setMoney] = useState(0);
  const [message, setMessage] = useState();
  const [coins, setCoins] = useState({
    dimes: 0,
    nickels: 0,
    pennies: 0,
    quarters: 0,
  });
  const makePurchase = async () => {
    try {
      const response = await axios.post(
        `https://vending.us-east-1.elasticbeanstalk.com/money/${money}/item/${itemSelection}`
      );
      console.log(response);
      setMessage("Thank You!!!");
      setMoney(0);
      setCoins(response.data);
    } catch (e) {
      setMessage(e.response.data.message);
    }
  };

  return (
    <div className={styles.vendingMachineIOContainer}>
      <CoinInput money={money} setMoney={setMoney} />
      <MessageOutput
        message={message}
        itemSelection={itemSelection}
        makePurchase={makePurchase}
      />
      <ChangeOutput coins={coins} setCoins={setCoins} />
    </div>
  );
};

export default VendingMachineIO;
