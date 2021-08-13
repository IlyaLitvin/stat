import React from "react";
import db from "../table.json";
import styled from "./TableSelection.module.css";
import TableLeft_1 from "../../../../../assets/TableLeft_1.svg";
import TableLeft_2 from "../../../../../assets/TableLeft_2.svg";
import TableClose from "../../../../../assets/TableLeftClose.svg";
import TableRight_1 from "../../../../../assets/TableRight_1.svg";
import TableRight_2 from "../../../../../assets/TableRight_2.svg";

const TableSection = () => {
  const data = db.map((el, index) => (
    <div className={styled.contentUnit} key={index}>
      <span className={`${styled.table1} ${styled.tableCenter}`}>
        {el.time}
      </span>
      <span className={`${styled.table2} ${styled.tableCenter}`}>
        {el.field}
      </span>
      <span className={`${styled.table3} ${styled.tableCenter}`}>
        {el.fieldUnit}
      </span>
      <span className={`${styled.table4} ${styled.tableCenter}`}>
        {el.activ}
      </span>
      <span className={`${styled.table5} ${styled.tableCenter}`}>{el.cat}</span>
      <span className={`${styled.table6} ${styled.tableCenter}`}>{el.sub}</span>
      <span className={`${styled.table7} ${styled.tableCenter}`}>
        {el.crea}
      </span>
      <span className={`${styled.table8} ${styled.tableCenter}`}>
        <button>{el.act}</button>
      </span>
    </div>
  ));

  return (
    <div className={styled.tableSelectionWrapper}>
      <div className={styled.header}>
        <div className={styled.headerLeft}>
          <img className={styled.marginLeft} src={TableLeft_1} alt="1" />
          <img className={styled.marginLeft} src={TableLeft_2} alt="2" />
          <button className={`${styled.filterButton} ${styled.marginLeft}`}>
            Entity Code-is-BL-01
            <img src={TableClose} alt="Close" />
          </button>
        </div>
        <div className={styled.headerRight}>
          <img className={styled.marginLeft} src={TableRight_1} alt="1" />
          <span className={styled.marginLeft}>Field: PIV-01 ▼</span>
          <img
            className={`${styled.marginRight} ${styled.marginLeft}`}
            src={TableRight_2}
            alt="2"
          />
        </div>
      </div>

      <div className={styled.fields}>
        <span>Time</span>
        <span>Field</span>
        <span>Field Unit</span>
        <span>Activity</span>
        <span>Category</span>
        <span>Sub Category</span>
        <span>Created by</span>
        <span>Action</span>
      </div>

      <div className={styled.content}>{data}</div>
    </div>
  );
};

export default TableSection;
