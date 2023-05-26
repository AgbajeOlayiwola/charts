import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
const BarChart = () => {
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
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Bar Chart</h2>
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
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Users Gained between 2016-2020',
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  )
}

export default BarChart
