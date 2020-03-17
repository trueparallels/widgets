import React from 'react'

import data from '../../data/widgetdata'
import { prepareChartData } from '../utils'

import Layout from '../layout'
import YearlyRevenue from '../components/yearlyrevenue'

const ChartView = () => {
    try {
        const chartData = prepareChartData(data)

        return (
            <Layout>
                <div>
                    <h2 className="text-2xl font-bold sm:text-center sm:text-3xl">Yearly Revenue</h2>
                </div>
    
                <div>
                    <YearlyRevenue chartData={chartData} />
                </div>
            </Layout>
        )
    } catch (error) {
        console.error(error)

        return (
            <Layout>
                <div className="border border-red-400 bg-red-200 px-3 py-2">Error preparing chart data.</div>
            </Layout>
        )
    }

}

export default ChartView
