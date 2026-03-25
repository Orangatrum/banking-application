"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets: [{Label: 'Banks', data: [2231, 4342, 5343], backgroundColor: ["#0747b6", "#2265d8", "2f91fa"]}],
        labels:['Bank 1', 'Bank 2', 'Bank 3']
    }
  return (
    <Doughnut data = {data}/>
  )
}

export default DoughnutChart