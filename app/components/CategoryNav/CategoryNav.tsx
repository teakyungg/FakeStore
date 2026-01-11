"use client";

import { useState } from "react";
import styles from "./CategoryNav.module.scss";

export function CategoryNav() {
  const [itemLine, setItemLine] = useState(0);
  const categoryMenu = ["전체", "추천", "랭킹", "세일"];

  return (
    <nav className={`${styles.categoryNav} ${styles.inner}`}>
      <ul className={styles.categoryMenu}>
        {categoryMenu.map((value, index) => (
          <li className={styles.item} key={value} onClick={() => setItemLine(index)}>
            {value}
            <div className={itemLine === index ? styles.itemLineOn : ""}></div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
