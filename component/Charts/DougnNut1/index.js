import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
const DoughNut1 = () => {
  const [chartData, setChartData] = useState({
    labels: [
      'offGridPower',
      'GasToPower',
      'cleanCooking',
      'transportation',
      'inputsToInfra',
      'ictTel',
      'onGridPower',
    ],
    datasets: [
      {
        data: [30, 50, 20, 30, 40, 50, 70],
        backgroundColor: [
          '#4572c4',
          '#8eaadc',
          '#dae3f3',
          '#a9d18e',
          '#70ad47',
          '#548235',
          '#203864',
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
        name="offGridPower"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[0]}
      />
      <input
        type="text"
        name="GasToPower"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[1]}
      />
      <input
        type="text"
        name="cleanCooking"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[2]}
      />
      <input
        type="text"
        name="transportation"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[3]}
      />
      <input
        type="text"
        name="inputsToInfra"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[4]}
      />
      <input
        type="text"
        name="ictTel"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[5]}
      />
      <input
        type="text"
        name="onGridPower"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[6]}
      />
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text:
                'Categorisation of the Guarantee Portfolio of Nx.xx by sector as at 31 March 2023',
              color: '#70ad47',
              font: { size: '20px' },
            },

            // legend: {
            //   display: false,
            // },
          },
        }}
      />
    </div>
  )
}

export default DoughNut1
