import React from 'react'
import { Link } from '@reach/router'

import { titleCase } from '../utils'

const ListItem = ({item}) => {
    const { id, name, description, revenue, timestamp, category } = item

    const timestampDateDisplay = new Date(timestamp).toLocaleDateString()

    return (
        <div className="border border-gray-700 px-3 py-2 mx-auto my-2 max-w-lg min-w-full sm:min-w-0 sm:w-64">
            <div className="flex flex-col mb-4">
                <Link to={`/info/${id}`}>
                    <span className="font-bold text-2xl text-indigo-500 hover:text-indigo-700">{name}</span>
                </Link>
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
