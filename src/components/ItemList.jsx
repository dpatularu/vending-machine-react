import React from "react";
import Item from "./Item";
import styles from "../styles/ItemList.module.scss";

const ItemList = ({ items, setItemSelection }) => {
  return (
    <div className={styles.itemList}>
      {items.map(({ id, name, price, quantity }) => (
        <Item
          key={id}
          id={id}
          name={name}
          price={price}
          quantity={quantity}
          setItemSelection={setItemSelection}
        />
      ))}
    </div>
  );
};

export default ItemList;
