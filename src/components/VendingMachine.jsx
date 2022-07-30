import { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import VendingMachineIO from "./VendingMachineIO";
import styles from "../styles/VendingMachine.module.scss";

const VendingMachine = () => {
  const [items, setItems] = useState([]);
  const [itemSelection, setItemSelection] = useState(0);

  const fetchItems = async () => {
    const request = await axios.get(
      "http://vending.us-east-1.elasticbeanstalk.com/items"
    );
    setItems(request.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className={styles.vendingMachine}>
      <ItemList items={items} setItemSelection={setItemSelection} />
      <VendingMachineIO itemSelection={itemSelection} />
    </div>
  );
};

export default VendingMachine;
