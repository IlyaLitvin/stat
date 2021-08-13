import React from "react";
import style from "./SideBar.module.css";
import columns from "./Column/columns.json";
import Column from "./Column/Column";

export default function SideBar() {
  return (
    <div className={style.leftBar}>
      <div className={style.title}>
        <div className={style.titleTextWrapper}>
          <span className={style.titleField}>Crop Fields</span>
          <span className={style.titleCluster}>| Clusters</span>
        </div>
      </div>
      <div className={style.rowNames}>
        <span className={style.fieldRow}>Field</span>
        <span className={style.yieldRow}>Yield</span>
        <span className={style.ratedRow}>Rate</span>
      </div>
      <div>
        {columns.map((c) => (
          <Column key={c.id} column={c} />
        ))}
      </div>
    </div>
  );
}
