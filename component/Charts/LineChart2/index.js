import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart2 = () => {
  const [chartData, setChartData] = useState({
    labels: ['Q12022', 'Q22022', 'Q32022', 'Q42022'],
    datasets: [
      {
        data: [150, 300, 450, 600, 750, 900, 1050],
        backgroundColor: ['#5191c9', '#5191c9', '#5191c9', '#5191c9'],
        barThickness: '30',
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
      <div className="chart-container">
        <h2 style={{ textAlign: 'center' }}>Bar Chart</h2>
        <input
          type="text"
          name="Q12022"
          onChange={handleInputChange}
          value={chartData.datasets[0].data[0]}
        />
        <input
          type="text"
          name="Q22022"
          onChange={handleInputChange}
          value={chartData.datasets[0].data[1]}
        />
        <input
          type="text"
          name="Q32022"
          onChange={handleInputChange}
          value={chartData.datasets[0].data[2]}
        />
        <input
          type="text"
          name="Q42022"
          onChange={handleInputChange}
          value={chartData.datasets[0].data[3]}
        />
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: 'XXXXXXXXXXx',
                color: '#0070c0',
                font: { size: '20px' },
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  )
}

export default BarChart2
