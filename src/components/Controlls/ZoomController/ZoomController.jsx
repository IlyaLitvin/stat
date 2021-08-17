import React from "react";
import styles from "./ZoomController.module.css";

export default function ZoomController({ zoom, zoomOut, zoomIn }) {
  return (
    <div className={`${styles.controlZoom} controll`}>
      <button className={styles.controlZoomMinus} onClick={zoomOut}>
        -
      </button>
      <button className={styles.controlZoomPlus} onClick={zoomIn}>
        +
      </button>
    </div>
  );
}
