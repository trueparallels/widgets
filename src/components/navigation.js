import React from 'react'

import { Link } from '@reach/router'

const Navigation = () => {
    return (
        <div className="mb-4">
            <Link to="/">
                <div className="border-b text-indigo-500 font-semibold border-gray-500 px-3 py-2 mb-2">
                    <span>List</span>
                </div>
            </Link>

            <Link to="/chart">
                <div className="border-b text-indigo-500 font-semibold border-gray-500 px-3 py-2 mb-2">
                    <span>Chart</span>
                </div>
            </Link>
        </div>
    )
}

export default Navigation
