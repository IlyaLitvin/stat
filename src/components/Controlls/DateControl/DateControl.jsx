import React from 'react';
import styles from './DateControl.module.css';
import moment from 'moment';
import sprite from '../../../assets/sprite.svg';

export default function DateControl({previousCoords, nextCoords, play, playCoords, pauseCoords}) {
  return (
    <div className={styles.mainWrap}>
      <div className={`${styles.dateWrap} controll`}>
        {moment().format('DD MMMM YYYY')}
      </div>
      <div className={`${styles.svgWrap} controll`}>
        <button disabled={play} type="button" onClick={playCoords}>
          <svg width="20" height="20">
            <use href={sprite + '#icon-play'} />
          </svg>
        </button>
        <button disabled={play} type="button" onClick={previousCoords}>
          <svg width="15" height="15">
            <use href={sprite + '#icon-doubleLeft'} />
          </svg>
        </button>
        <button type="button" onClick={pauseCoords}>
          <svg width="14" height="14">
            <use href={sprite + '#icon-pause'} />
          </svg>
        </button>
        <button disabled={play} type="button" onClick={nextCoords}>
          <svg width="15" height="15">
            <use href={sprite + '#icon-doubleRight'} />
          </svg>
        </button>
      </div>
    </div>
  );
}
