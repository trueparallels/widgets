import React from 'react'
import '../tailwind.css'
import Header from './layout/header'
import Footer from './layout/footer'
import Navigation from './components/navigation'

const Layout = ({children}) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Navigation />
            <div className="mx-auto my-4 w-11/12 flex-grow">
                { children }
            </div>
            <Footer />
        </div>
    )
}

export default Layout
