import React from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./Graph.module.css";

const date = +new Date(2021, 2, 19);
const dayMS = 86400000;

const data = new Array(8).fill(null).map((d, idx) => ({
  time: date + dayMS * (idx + 1),
  value: Math.trunc(Math.random() * 100) / 100,
}));

const series = [
  {
    name: "Desktops",
    data: data.map((d) => ({ x: d.time, y: d.value })),
  },
];

const options = {
  chart: {
    type: "line",
    zoom: {
      enabled: false,
    },
    animations: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    lineCap: `round`,
  },
  colors: [`#547345`],
  title: {},
  grid: {
    borderColor: `#C3B9AF`,
    yaxis: {
      lines: {
        //  offsetY: -500,
        // offsetX: -500,
      },
    },
    xaxis: {
      lines: {
        //  offsetX: -50,
        // offsetY: -50,
      },
    },
    padding: {
      right: 40,
    },
    row: {},
  },
  xaxis: {
    type: `datetime`,
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
    labels: {
      offsetY: -10,
    },
  },
};

export default function Graph() {
  return (
    <div className={styles.mainContainer}>
      <div id={`chart`} className={styles.chart}>
        <div className={styles.filter}>{`Time Filter ▼`}</div>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={279}
        />
      </div>
    </div>
  );
}
