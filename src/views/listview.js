import React from 'react'

import data from '../../data/widgetdata.json'
import Layout from '../layout'
import ListItem from '../components/listitem.js'

const ListView = () => {
    return (
        <Layout>
            <div className="flex flex-wrap justify-around">
                {
                    data.map(item => (
                        <ListItem key={item.id} item={item} />
                    ))
                }
            </div>
        </Layout>
    )
}

export default ListView
