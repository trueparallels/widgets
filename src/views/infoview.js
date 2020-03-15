import React from 'react'

import data from '../../data/widgetdata.json'
import Layout from '../layout'
import { findWidgetById, titleCase } from '../utils.js'

const InfoView = (props) => {
    const { widgetId } = props

    const infoData = findWidgetById(widgetId, data)

    const { name, description, id, revenue, timestamp, category } = infoData

    const timestampDateDisplay = new Date(timestamp).toLocaleDateString()

    return (
        <Layout>
            <div className="max-w-lg mx-auto">
                <div>
                    <h2 className="text-2xl font-bold sm:text-center sm:text-3xl">{name}</h2>
                </div>

                <div className="text-md sm:text-xl">
                    <div className="flex justify-between">
                        <div className="font-semibold">Description:</div>
                        <div>{ description }</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="font-semibold">Id:</div>
                        <div>{ id }</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="font-semibold">Revenue:</div>
                        <div className="text-green-500">{ `$${revenue}` }</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="font-semibold">Timestamp:</div>
                        <div>{ timestampDateDisplay }</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="font-semibold">Category:</div>
                        <div>{ titleCase(category) }</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default InfoView
