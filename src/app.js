import React from 'react'
import Layout from './layout'
import ListView from './views/listview'

const App = () => {
    return (
        <Layout>
            <div className="border border-green-400 mx-auto my-4 px-5 py-4 w-11/12">
                <div>
                    <ListView />
                </div>
            </div>
        </Layout>
    )
}

export default App
