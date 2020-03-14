import React from 'react'
import '../tailwind.css'
import Header from './layout/header'
import Footer from './layout/footer'

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            { children }
            <Footer />
        </div>
    )
}

export default Layout
