import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js'
import 'chart.js/auto'
import { Pie } from 'react-chartjs-2'
const PieChart = () => {
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
    <div>
      <h2 style={{ textAlign: 'center' }}>Pie Chart</h2>
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
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Users Gained between 2016-2020',
            },
          },
        }}
      />
    </div>
  )
}

export default PieChart
