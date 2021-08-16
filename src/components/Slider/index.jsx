import React, { useState } from "react";
import { useMap } from "react-leaflet";
import { Slider } from "./Slider";
import ZoomController from "../ZoomController/ZoomController";

export default function SliderBounds() {
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

  return (
    <>
      <Slider zoomCustom={zoomCustom} setZoom={onChange} />;
      <ZoomController zoomIn={zoomIn} zoomOut={zoomOut} />;
    </>
  );
}
