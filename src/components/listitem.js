import React from 'react'

import { titleCase } from '../utils'

const ListItem = ({item}) => {
    const { name, description, revenue, timestamp, category } = item

    const timestampDateDisplay = new Date(timestamp).toLocaleDateString()

    return (
        <div className="border border-gray-700 px-3 py-2 mb-4 ">
            <div className="flex flex-col mb-4">
                <span className="font-bold text-2xl">{name}</span>
                <span className="text-xs text-gray-700">{titleCase(category)}</span>
                <span className="text-sm">{description}</span>
            </div>

            <div className="flex justify-between">
                <span className="font-semibold text-lg text-green-500">{`$${revenue}`}</span>
                <span className="font-semibold text-lg">{timestampDateDisplay}</span>
            </div>
        </div>
    )
}

export default ListItem
