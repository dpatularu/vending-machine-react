import { useState } from "react";
import axios from "axios";
import CoinInput from "./CoinInput";
import MessageOutput from "./MessageOutput";
import ChangeOutput from "./ChangeOutput";
import styles from "../styles/VendingMachineIO.module.scss";

const VendingMachineIO = ({
  items,
  setItems,
  itemSelection,
  setItemSelection,
}) => {
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
        `http://vending.us-east-1.elasticbeanstalk.com/money/${money}/item/${itemSelection}`
      );
      setMessage("Thank You!!!");
      setMoney(0);
      setCoins(response.data);
      setItemSelection(0);
      removeItem(itemSelection);
    } catch (e) {
      setMessage(e.response.data.message);
    }
  };

  const removeItem = (id) => {
    const updatedItems = [...items];
    const index = updatedItems.findIndex((item) => item.id == id);
    updatedItems[index].quantity = updatedItems[index].quantity - 1;
    setItems(updatedItems);
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
