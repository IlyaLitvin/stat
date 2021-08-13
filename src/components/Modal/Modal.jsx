import React from "react";
import Graph from "../Graph/Graph";
import Info from "../Info/Info";
import Table from "../Table/Table";
import styles from "./Modal.module.css";
import sprite from "../../assets/sprite.svg";

export default function Modal() {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.bgWrap}>
        <div className={styles.circleNameWrap}>
          <svg width="38" height="38">
            <use href={sprite + "#icon-circle"} />
          </svg>
          <p>{`Field: PIV-01 ▼`}</p>
        </div>
        <div className={styles.modalWrap}>
          <Info />
          <Graph />
        </div>
        <Table />
      </div>
    </div>
  );
}
