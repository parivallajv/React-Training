import { useState } from "react";
import { Graph, UserData } from "../components/Graph";
import {
  ChartHeader,
  ChartLayout,
  Footer,
  HeaderFont,
  PeriodNav,
  PeriodText,
} from "../ChartStyle";
const ChartComponent = () => {
  const [userData, setUserData] = useState({
    labels: [
      null,
      "01 Feb",
      "03 Feb",
      "06 Feb",
      "09 Feb",
      "12 Feb",
      "15 Feb",
      "18 Feb",
      "21 Feb",
      "24 Feb",
      "27 Feb",
    ],
    datasets: [
      {
        label: null,
        data: [300,250, 245, 240, 220, 210, 205, 200, 190, 180, 145,50].reverse(),
        borderColor: "#3D7AB6",
        backgroundColor: "#3D7AB6",
        tension: -0.1,
        reverse: true,
      },
    ],
  });

  const options = {
    scales: {
      y: {
        beginAtZero: false, // Start y-axis at the lowest data value
        stepSize: 50, 
        reverse: true, 
      },
    },
  };

  return (
    <div>
      {" "}
      <ChartHeader>
        <HeaderFont>Rank Overview</HeaderFont>
        <PeriodNav>
          <PeriodText>Week</PeriodText>
          <PeriodText>Month</PeriodText>
          <PeriodText>Quarter</PeriodText>
          <PeriodText>Year</PeriodText>
        </PeriodNav>
      </ChartHeader>
      <ChartLayout>
        <Graph chartData={userData} options={options}/>
      </ChartLayout>
      <Footer></Footer>
    </div>
  );
};
export default ChartComponent;
