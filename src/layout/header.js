import React from 'react'
import { Link } from '@reach/router'

const Header = () => {
    return (
        <header className="px-4 py-4 bg-gray-800">
            <div>
                <Link to="/">
                    <h1 className="text-3xl font-semibold text-white">Widgets</h1>
                </Link>
            </div>
        </header>
    )
}

export default Header
