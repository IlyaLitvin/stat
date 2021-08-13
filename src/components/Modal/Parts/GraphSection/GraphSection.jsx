import React from "react";
import styles from "../../Modal.module.css";
import Info from "./Info/Info";
import Graph from "./Graph/Graph";

const GraphSection = () => {
  return (
    <div className={styles.modalWrap}>
      <Info />
      <Graph />
    </div>
  );
};

export default GraphSection;
