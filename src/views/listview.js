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
        </div>
    )
}

export default ListView
