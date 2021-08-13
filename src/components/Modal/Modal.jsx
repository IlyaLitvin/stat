import React from "react";
import Table from "./Parts/TableSection/Table.jsx";
import styles from "./Modal.module.css";
import Header from "./Parts/Header/Header";
import GraphSection from "./Parts/GraphSection/GraphSection";

export default function Modal() {
  return (
    <div className={styles.mainWrap}>
      <Header />
      <GraphSection />
      <Table />
    </div>
  );
}
