import React from "react";
import style from "./SideBar.module.css";
import greenVector from "../../assets/greenVector.svg";
import yellowVector from "../../assets/yellowWektor.svg";
import yieldImg from "../../assets/yieldImg.svg";

const Column = ({ column }) => {
  const text = column.rateValue
    ? column.rateValue > 0
      ? `+${column.rateValue}%`
      : `${column.rateValue}%`
    : "-";

  return (
    <div className={style.columnList}>
      <div className={style.fieldBlock}>
        <img
          className={style.fieldImg}
          src={column.rateValue > 0 ? greenVector : yellowVector}
          alt="1"
        />
        <div className={style.fieldTextWrapper}>
          <span className={style.boldText}>{column.name}</span>
          <span className={style.smallText}>{column.space}</span>
        </div>
      </div>
      <div className={style.yieldBlock}>
        <img src={yieldImg} alt="2" />
        <div className={style.yieldTextWrapper}>
          <span className={style.boldText}>{column.yield}</span>
          <span className={style.smallText}>{column.yieldAge}</span>
        </div>
      </div>
      <div className={style.rateBlock}>
        <span
          className={
            column.rateValue > 0 ? style.rateGreenValue : style.rateRedValue
          }
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default Column;
