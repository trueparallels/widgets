import React from 'react'
import Layout from './layout'
import ListView from './views/listview'

const App = () => {
    return (
        <Layout>
            <div className="mx-auto my-4 w-11/12">
                <div>
                    <ListView />
                </div>
            </div>
        </Layout>
    )
}

export default App
