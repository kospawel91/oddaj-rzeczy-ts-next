import React from "react";
import { Nav } from "../types";
import styles from "../styles/Navbar.module.scss";

import { navMenuItems } from "../data";

const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <ul className={styles.navbar__list}>
          {navMenuItems.map((item: Nav) => {
            return (
              <li className={styles.navbar__item} key={item.id}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
