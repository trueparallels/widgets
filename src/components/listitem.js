import React from 'react'

const ListItem = ({item}) => {
    const { name, description, revenue, timestamp, category } = item

    return (
        <div className="flex flex-col mb-4">
            <span>{name}</span>
            <span>{description}</span>
            <span>{revenue}</span>
            <span>{timestamp}</span>
            <span>{category}</span>
        </div>
    )
}

export default ListItem
