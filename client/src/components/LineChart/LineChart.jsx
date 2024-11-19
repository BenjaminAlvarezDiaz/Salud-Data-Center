import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = ({ totals = [], labels = [] }) => {
  const styles = getComputedStyle(root);
  const colorBackground = styles.getPropertyValue('--background-color').trim();
  const data = {
    labels, 
    datasets: [
      {
        label: "Totales",
        data: totals, 
        backgroundColor: "red",
        borderColor: "red",
        pointBorderColor: colorBackground,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Días de la semana",
        },
      },
      y: {
        title: {
          display: true,
          text: "Total ($)",
        },
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;