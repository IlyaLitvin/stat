import React from "react";
import Graph from "../Graph/Graph";
import Info from "../Info/Info";
import Table from "../Table/Table";
import styles from "./Modal.module.css";
import sprite from "../../assets/sprite.svg";

export default function Modal() {
  return (
    <div className={styles.mainWrap}>
      <Header />
      <GraphSection />
      <Table />
    </div>
  );
}
