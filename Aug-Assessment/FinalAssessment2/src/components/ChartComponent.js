import { useState } from "react";
import { Graph, UserData } from "../components/Graph";
const ChartComponent = () => {
  const [userData, setUserData] = useState({
    labels: [
      "01 Feb",
      "03 Feb",
      "06 Feb",
      "09 Feb",
      "12 Feb",
      "15 Feb",
      "18 Feb",
      "21 Feb",
      "24 Jan",
      "27 Jan",
    ],
    datasets: [
      {
        label: "datas graph2",
        data: [
          null,
          1000,
          1000,
          1200,
          1400,
          1800,
          2200,
          2600,
          3200,
          3800,
          5000,
        ],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });
  return <Graph chartData={userData} />;
};
export default ChartComponent;
