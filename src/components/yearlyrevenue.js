import React from 'react'
import { Line } from 'react-chartjs-2'

const YearlyRevenue = ({chartData}) => {
    const data = {
        labels: Object.keys(chartData),
        datasets: [
            {
                label: 'Yearly Revenue',
                xAxisId: 'year',
                yAxisId: 'revenue',
                borderColor: '#667eea',
                fill: false,
                lineTension: 0,
                data: Object.values(chartData)
            }
        ]
    }

    const options = {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Year'
                }
            }],
            yAxes: [{
                ticks: {
                    callback: (value) => `$${value}`
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Revenue (in dollars)'
                }
            }]
        },
        tooltips: {
            callbacks: {
                label: (tooltipItems) => `$${tooltipItems.yLabel.toString()}`
            }
        }
    }
    
    return (
        <div className="max-w-screen-lg mx-auto">
            <Line data={data} options={options} />
        </div>
    )
}

export default YearlyRevenue
