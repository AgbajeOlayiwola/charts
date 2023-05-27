import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
const DoughNut2 = () => {
  const [chartData, setChartData] = useState({
    labels: [
      'LFC',
      'GPC',
      'PAT',
      'GLNG',
      'DARWAYCOAST',
      'VIATHAN',
      'NSP',
      'GEL',
      'TSP',
    ],
    datasets: [
      {
        data: [30, 50, 20, 30, 40, 50, 70, 90, 100],
        backgroundColor: [
          '#1f4e79',
          '#2d75b6',
          '#5b9bd5',
          '#5b9bd5',
          '#deebf7',
          '#375723',
          '#548235',
          '#70ad47',
          '#c5e0b4',
        ],

        weight: '6',
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
      <h2 style={{ textAlign: 'center' }}>Line Chart</h2>
      <input
        type="text"
        name="LFC"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[0]}
      />

      <input
        type="text"
        name="GPC"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[1]}
      />
      <input
        type="text"
        name="PAT"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[2]}
      />

      <input
        type="text"
        name="GLNG"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[3]}
      />
      <input
        type="text"
        name="DARWAYCOAST"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[4]}
      />
      <input
        type="text"
        name="VIATHAN"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[5]}
      />
      <input
        type="text"
        name="NSP"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[6]}
      />
      <input
        type="text"
        name="GEL"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[7]}
      />
      <input
        type="text"
        name="TSP"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[8]}
      />
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text:
                'Analysis of Guaranteed Transactions Since Inception of Nx.xx as at 31 March 2023',
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

export default DoughNut2
