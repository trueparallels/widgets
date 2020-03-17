import React from 'react'

import { Link } from '@reach/router'

const Navigation = () => {
    return (
        <div className="bg-gray-300 flex justify-around">
            <Link to="/">
                <div className="text-indigo-500 hover:text-indigo-700 font-semibold px-3 py-2">
                    <span>List</span>
                </div>
            </Link>

            <Link to="/chart">
                <div className="text-indigo-500 hover:text-indigo-700 font-semibold px-3 py-2">
                    <span>Chart</span>
                </div>
            </Link>
        </div>
    )
}

export default Navigation
