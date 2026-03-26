"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; //imported chart.js
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets: [{Label: 'Banks', data: [2231, 4342, 5343], backgroundColor: ["#0747b6", "#2265d8", "2f91fa"]}],
        labels:['Bank 1', 'Bank 2', 'Bank 3']
    }
  return (
    <Doughnut 
    data = {data}
    options = {{cutout: '40%', //width of the doughnut chart
    plugins:{legend:{display:false}}}} //remove: legend of the chart
    />
  )
}

export default DoughnutChart