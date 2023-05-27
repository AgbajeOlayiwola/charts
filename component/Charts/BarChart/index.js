import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['2022', '2023', '2024', '2025', '2026', '2027'],
    datasets: [
      {
        data: [150, 300, 450, 600, 750, 900, 1050],
        backgroundColor: [
          '#70ad47',
          '#70ad47',
          '#70ad47',
          '#70ad47',
          '#70ad47',
          '#70ad47',
        ],
        barThickness: '10',
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
        name="2022"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[0]}
      />
      <input
        type="text"
        name="2023"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[1]}
      />
      <input
        type="text"
        name="2024"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[2]}
      />
      <input
        type="text"
        name="2025"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[3]}
      />
      <input
        type="text"
        name="2026"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[4]}
      />
      <input
        type="text"
        name="2027"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[5]}
      />
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Expected guarantee portfolio growth (year-on-year) ()',
              color: '#70ad47',
              font: { size: '20px' },
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
