import React, { FunctionComponent } from "react";
import styles from "../styles/Button.module.scss";

const Button: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.btn__container}>
      <button className={styles.btn}>ODDAJ RZECZY</button>
    </div>
  );
};

export default Button;
