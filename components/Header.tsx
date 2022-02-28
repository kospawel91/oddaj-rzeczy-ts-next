import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.scss";
import decoration from "../assets/Decoration.svg";

const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <img
          className={styles.header__img}
          src="https://i.ibb.co/cgfFkz5/Bez-tytu-u.jpg"
        />
      </div>
      <div className={styles.header__right}>
        <h2 className={styles.header__right__heroText}>
          Zacznij pomagać! <br />
          Oddaj niechciane rzeczy w zaufane ręce
        </h2>
        <Image src={decoration} />
        <div className={styles.btn__container}>
          <button className={styles.btn}>
            ODDAJ <br /> RZECZY
          </button>
          <button className={styles.btn}>
            ZORGANIZUJ <br />
            ZBIÓRKĘ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
