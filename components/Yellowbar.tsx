import React from "react";
import { IYellow } from "../types";
import { yellowSectionItems } from "../data";
import styles from "../styles/Yellowbar.module.scss";

const Yellowbar = (): JSX.Element => {
  return (
    <div className={styles.yellowBar}>
      {yellowSectionItems.map((item: IYellow, i: number) => {
        return (
          <div className={styles.yellowBar__item} key={i}>
            <div className={styles.yellowBar__num}>{item.num}</div>
            <div className={styles.yellowBar__title}>{item.title}</div>
            <div className={styles.yellowBar__text}>{item.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Yellowbar;
