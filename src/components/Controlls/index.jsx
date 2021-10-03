import React, { useState, useContext, useEffect } from "react";
import { useMap } from "react-leaflet";
import { Slider } from "./Slider/Slider";
import ZoomController from "./ZoomController/ZoomController";
import DateControl from "./DateControl/DateControl";
import styles from './Slider.module.css';
import { CoordinateContext } from "../Context/Context";

export default function SliderBounds() {
  const {coordinatsArr} = useContext(CoordinateContext);
  const [play, setPlay] = useState(false);
  const [currentCenter, setCurrentCenter] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const parentMap = useMap();
  const [zoomCustom, setZoomCustom] = useState(13);
  const onChange = (value) => {
    parentMap.setZoom(value);
    setZoomCustom(value);
  };
  const zoomIn = () => {
    parentMap.setZoom(zoomCustom + 1);
    setZoomCustom(zoomCustom + 1);
  };
  const zoomOut = () => {
    parentMap.setZoom(zoomCustom - 1);
    setZoomCustom(zoomCustom - 1);
  };
  const previousCoords = () => {    
    setCurrentCenter((oldCenter)=> {
      const newCenter = oldCenter === 0 ? coordinatsArr.length - 1 : currentCenter - 1;
      if(coordinatsArr[newCenter]) {
        parentMap.setView(coordinatsArr[newCenter].getCenter());
      }
      return newCenter;
    });
  }
  const nextCoords = () => {
    setCurrentCenter((oldCenter) => {
      const newCenter = (oldCenter === coordinatsArr.length - 1) ? 0 : oldCenter + 1;
      if (coordinatsArr[newCenter]) {
        parentMap.setView(coordinatsArr[newCenter].getCenter());
      }
      return newCenter;
    });
  }
  const playCoords = () => {
    setPlay(true)
    const newIntervalId = setInterval(nextCoords, 1000);
    setIntervalId(newIntervalId);
  };
  const pauseCoords = () => {
    setPlay(false);
    clearInterval(intervalId)
  }

  return (
    <div className={styles.controllsWrapper}>
      <ZoomController zoomIn={zoomIn} zoomOut={zoomOut} />
      <Slider zoomCustom={zoomCustom} setZoom={onChange} />
      <DateControl previousCoords={previousCoords} nextCoords={nextCoords} play={play} playCoords={playCoords} pauseCoords={pauseCoords}/>
    </div>
  );
}
