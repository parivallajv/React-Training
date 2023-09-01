import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import React from "react";
import { Line } from "react-chartjs-2";
import { GraphDiv } from "../styles/ChartStyle";
export const Graph = ({ chartData }) => {
  const options = {
    responsive: true,
    aspectRatio: 4 / 1.38,
    scales: {
      x: {
        beginAtZero: false,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        reverse: true,
        min: 50,
        max: 300,
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
    tension: 0.1,
  };
  return (
    <GraphDiv className="sample">
      <Line data={chartData} options={options} className="graph" />
    </GraphDiv>
  );
};
