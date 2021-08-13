import React, { useEffect, useState } from "react";
import "./App.css";
import convert from "xml-js";
import iconvlite from "iconv-lite";
import { TileLayer, ZoomControl, MapContainer } from "react-leaflet";
import Modal from "./components/Modal/Modal";
import { LatLngBounds } from "leaflet";
import { Slider } from "./components/Slider/Slider";

const urlAPI =
  "https://eos.com/landviewer/wms/7f609ae3-ffb8-4fd4-bdbc-7a295800990b?SERVICE=WMS&REQUEST=GetCapabilities";

const initState = new LatLngBounds(
  [22.17917, 30.52162], //  southWest
  [24.05272, 32.74153] // northEast
);

function App() {
  const [coords, setCoords] = useState(initState);
  const [zoom, setZoom] = useState(13);
  const [coordinatsArr, setCoordinatsArr] = useState([]);
  const [coordsFetch, setCoordsFetch] = useState(false);

  useEffect(() => {
    const request = new Request(urlAPI);
    const recursion = (arr, coordinats) => {
      for (let key in arr) {
        if (arr[key].EX_GeographicBoundingBox) {
          coordinats.push(arr[key].EX_GeographicBoundingBox);
        } else {
          recursion(arr[key].Layer, coordinats);
        }
      }
    };
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
        .then((data) => {
          recursion(data.WMS_Capabilities.Capability.Layer, coordinatsArr);
          console.log(coordinatsArr);
          setCoordinatsArr(coordinatsArr);
          setCoordsFetch(true);
        })
        .catch((err) => console.log(err));
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (coordinatsArr.length) {
      const newCoordinats = new LatLngBounds(
        [
          coordinatsArr[1].southBoundLatitude._text,
          coordinatsArr[1].westBoundLongitude._text,
        ],
        [
          coordinatsArr[1].northBoundLatitude._text,
          coordinatsArr[1].eastBoundLongitude._text,
        ]
      );
      setCoords(newCoordinats);
    }
  }, [coordsFetch, coordinatsArr]);

  return (
    <div className="mainWrap">
      {/* <Modal /> */}
      <div className="mapContainer">
        <MapContainer
          zoomControl={false}
          scrollWheelZoom={false}
          center={coords.getCenter()}
          zoom={zoom}
        >
          <ZoomControl position={"bottomright"} />
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
        </MapContainer>
        <Slider zoom={zoom} setZoom={setZoom} />
      </div>
    </div>
  );
}

export default App;
