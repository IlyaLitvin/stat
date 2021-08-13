import React from "react";
import styles from "../GraphSection.module.css";

const info = [
  { id: 1, name: "Field size", title: "40 ha" },
  { id: 2, name: "Region", title: "Riyadh, Saudi Arabia" },
  { id: 3, name: "Showing date", title: "01 April 2020" },
  { id: 4, name: "Harvest date", title: "25 Nov 2020" },
];

export default function Info() {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.title}>
        <span className={styles.titleText}>Info:</span>
      </div>

      {info.map((i, index) => (
        <div className={styles.infoWrapper} key={i.id}>
          <p className={styles.name}>{i.name}</p>
          <p className={styles.value}>{i.title}</p>
        </div>
      ))}
    </div>
  );
}
