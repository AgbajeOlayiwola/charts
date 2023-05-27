import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughNut = () => {
  const [chartData, setChartData] = useState({
    datasets: [
      {
        // label: ['red', 'amber', 'green'],
        data: [30, 50, 20],
        backgroundColor: ['red', '#ed7d31', 'green'],
        weight: '6',
      },
    ],
    labels: ['red', 'amber', 'green'],
  })
  const options = {
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: 10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 4,
      },
    },
  }

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
      <h2 style={{ textAlign: 'center' }}>PieChart1</h2>
      <input
        type="text"
        name="red"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[0]}
      />
      <input
        type="text"
        name="amber"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[1]}
      />
      <input
        type="text"
        name="green"
        onChange={handleInputChange}
        value={chartData.datasets[0].data[2]}
      />
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text:
                'Categorisation of  of Mandated Transactions as at 31 March 2023',
              color: '#70ad47',
              font: { size: '20px' },
            },

            // legend: {
            //   display: false,
            // },
            outlabels: {
              text: '%l %p',
              color: 'white',
              stretch: 35,
              font: {
                resizable: true,
                minSize: 12,
                maxSize: 18,
              },
            },
          },
        }}
      />
    </div>
  )
}

export default DoughNut
