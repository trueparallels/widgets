import React from 'react'

import data from '../../data/widgetdata.json'
import ListItem from '../components/listitem.js'

const ListView = () => {
    return (
        <div>
            {
                data.map(item => (
                    <ListItem key={item.id} item={item} />
                ))
            }
            {
                data.map(item => (
                    <pre key={item.id}>
                        { JSON.stringify(item, null, 4) }
                    </pre>
                ))
            }
        </div>
    )
}

export default ListView
