"use client";

import { useState } from "react";
import styles from "./CategoryNav.module.scss";
import { useCategoryStore } from "@/app/useCategoryStore";

export function CategoryNav() {
  const [itemLine, setItemLine] = useState(0);
  const categoryMenu = ["추천", "랭킹", "세일"];
  const setNowCategory = useCategoryStore((state) => state.setNowCategory);

  const setCategory = (value: string, index: number) => {
    setNowCategory(value);
    setItemLine(index);
  };

  return (
    <nav className={`${styles.categoryNav} ${styles.inner}`}>
      <ul className={styles.categoryMenu}>
        {categoryMenu.map((value, index) => (
          <li className={styles.item} key={value} onClick={() => setCategory(value, index)}>
            {value}
            <div className={itemLine === index ? styles.itemLineOn : ""}></div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
