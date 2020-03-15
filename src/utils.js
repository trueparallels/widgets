import { split, pipe, map, concat, toUpper, head, toLower, tail, join, converge, find, propEq, __ } from 'ramda'

export const capitalizeWord = converge(concat, [pipe(head, toUpper), pipe(tail, toLower)])

export const titleCase = pipe(
    split(' '),
    map(capitalizeWord),
    join(' ')
)

export const idEquals = propEq('id')
export const findWidgetById = (id, data) => find(idEquals(id), data)