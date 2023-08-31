import React from "react";
import { Line } from "react-chartjs-2";
import { GraphDiv } from "../styles/ChartStyle";
export const Graph = ({ chartData }) => {
  const options = {
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
      <Line data={chartData} options={options} />
    </GraphDiv>
  );
};
