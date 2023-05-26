import React, { useState } from 'react'
import PieChart from '../component/Charts/PieChart'
import styles from '../styles/Home.module.css'
import BarChart from '../component/Charts/BarChart'
import LineCHart from '../component/Charts/LIneChart'
import DoughNut from '../component/Charts/DoughNut'

export default function Home() {
  const [input1, setInput1] = useState(20)
  const [chartData, setChartData] = useState({
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['red', 'blue', 'yellow'],
      },
    ],
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    const updatedData = [...chartData.datasets[0].data]
    const dataIndex = chartData.labels.indexOf(name)
    updatedData[dataIndex] = Number(value)

    setChartData((prevChartData) => ({
      ...prevChartData,
      datasets: [
        {
          ...prevChartData.datasets[0],
          data: updatedData,
        },
      ],
    }))
  }

  return (
    <>
      <input
        type="text"
        name="Red"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[0]}
      />
      <input
        type="text"
        name="Blue"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[1]}
      />
      <input
        type="text"
        name="Yellow"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[2]}
      />
      {/* <button onClick={setCharts}>Set</button> */}
      <main className={styles.main}>
        <PieChart chartData={chartData} />
        <BarChart chartData={chartData} />
        <LineCHart chartData={chartData} />
        <DoughNut chartData={chartData} />
      </main>
    </>
  )
}
