import React, { useState } from "react";
import "./App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import convert from "xml-js";
import iconvlite from "iconv-lite";
import Modal from "./components/Modal/Modal";
import { LatLngBounds } from "leaflet";

const urlAPI =
  "https://eos.com/landviewer/wms/7f609ae3-ffb8-4fd4-bdbc-7a295800990b?SERVICE=WMS&REQUEST=GetCapabilities";

const request = new Request(urlAPI);

fetch(request).then((results) => {
  results
    .text()
    .then((str) => {
      const content = iconvlite.decode(str, "UTF-8");
      return convert.xml2js(content, {
        compact: true,
        ignoreDoctype: true,
        attributesKey: "attributes",
      });
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

const initState = new LatLngBounds(
  [22.17917, 30.52162], //  southWest
  [24.05272, 32.74153] // northEast
);

function App() {
  const [coords, setCoords] = useState(initState);

  return (
    <div className="mainWrap">
      {/* <Modal /> */}
      <div className="mapContainer">
        <MapContainer bounds={coords} scrollWheelZoom={false}>
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
