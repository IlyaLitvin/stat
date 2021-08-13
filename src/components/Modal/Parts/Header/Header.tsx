import React from "react";
import styles from "../../Modal.module.css";
import sprite from "../../../../assets/sprite.svg";
import Header_1 from "../../../../assets/Header_1.svg";
import Header_2 from "../../../../assets/Header_2.svg";
import Header_3 from "../../../../assets/Header_3.svg";
import Header_4 from "../../../../assets/Header_4.svg";
import Header_5 from "../../../../assets/Header_5.svg";
import Header_6 from "../../../../assets/Header_6.svg";
import Header_7 from "../../../../assets/Header_7.svg";
import Header_8 from "../../../../assets/Header_8.svg";
import Header_9 from "../../../../assets/Header_9.svg";

const Header = () => {
  return (
    <div className={styles.circleNameWrap}>
      <div className={styles.headerSelector}>
        <svg width="38" height="38">
          <use href={sprite + "#icon-circle"} />
        </svg>
        <p>{`Field: PIV-01 ▼`}</p>
      </div>

      <div className={styles.headerButtons}>
        <img src={Header_1} alt="1" />
        <img src={Header_2} alt="2" />
        <img src={Header_3} alt="3" />
        <img src={Header_4} alt="4" />
        <img src={Header_5} alt="5" />
        <img src={Header_6} alt="6" />
        <img src={Header_7} alt="7" />
        <img src={Header_8} alt="8" />
        <img src={Header_9} alt="9" />
      </div>
    </div>
  );
};

export default Header;
