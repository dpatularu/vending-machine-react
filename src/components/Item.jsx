import React from "react";
import styles from "../styles/Item.module.scss";

const Item = ({ id, name, price, quantity, setItemSelection }) => {
  return (
    <article className={styles.item} onClick={() => setItemSelection(id)}>
      <span className={styles.index}>{id}</span>
      <div>
        <h3>{name}</h3>
        <p>${price.toFixed(2)}</p>
      </div>
      <p>Quantity Left: {quantity}</p>
    </article>
  );
};

export default Item;
