import React from "react";
import SideBar from "./SideBar/SideBar";
import styles from "./Table.module.css";
import TableSection from "./TableSection/TableSection";

export default function Table() {
  return (
    <div className={styles.tableWrap}>
      <SideBar />
      <TableSection />
    </div>
  );
}
