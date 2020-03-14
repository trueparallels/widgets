import React from 'react'

const Footer = () => {
    return (
        <footer className="px-2 py-1 bg-gray-800 text-gray-100 text-sm">
            © {new Date().getFullYear()}
        </footer>
    )
}

export default Footer
