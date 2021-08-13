import React from "react";
import SideBar from "./SideBar";
import db from "./table.json";
import styles from "./Table.module.css";

export default function Table() {
  const data = db.map((el, index) => (
    <tr key={index}>
      <td>{el.time}</td>
      <td>{el.field}</td>
      <td>{el.fieldUnit}</td>
      <td>{el.activ}</td>
      <td>{el.cat}</td>
      <td>{el.sub}</td>
      <td>{el.crea}</td>
      <td>
        <button>{el.act}</button>
      </td>
    </tr>
  ));

  return (
    <div className={styles.tableWrap}>
      <SideBar />
      <div>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Field</th>
              <th>Field Unit</th>
              <th>Activity</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>Created by</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </div>
    </div>
  );
}
