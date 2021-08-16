import React from "react";
import styles from "./Slider.module.css";

export const Slider = ({ zoomCustom, setZoom }) => {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderBar}>
        <input
          className={styles.activBar}
          type="range"
          min={1}
          max={17}
          value={zoomCustom}
          onChange={(e) => setZoom(e.target.value)}
        />
      </div>
    </div>
  );
};
