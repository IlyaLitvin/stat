import React, { useEffect, useState } from "react";
import "./App.css";
import convert from "xml-js";
import iconvlite from "iconv-lite";
import { TileLayer, ZoomControl, MapContainer } from "react-leaflet";
import Modal from "./components/Modal/Modal";
import { LatLngBounds } from "leaflet";
import Slider from "./components/Slider";
import Reg from "./components/Reg/Reg.jsx";

const urlAPI =
  "https://eos.com/landviewer/wms/7f609ae3-ffb8-4fd4-bdbc-7a295800990b?SERVICE=WMS&REQUEST=GetCapabilities";

const initState = new LatLngBounds(
  [22.505985863772644, 28.943935837246332], //  southWest
  [23.498237025902313, 29.278971101962256] // northEast
);

function App() {
  const [coords, setCoords] = useState(initState);
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
    // <div className="mainWrap">
    //   {/* <Modal /> */}
    //   <div className="mapContainer">
    //     <MapContainer
    //       zoomControl={false}
    //       scrollWheelZoom={false}
    //       doubleClickZoom={false}
    //       center={coords.getCenter()}
    //       zoom={13}
    //     >
    //       <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
    //       <Slider />
    //     </MapContainer>
    //   </div>
    // </div>
    <Reg />
  );
}

export default App;
