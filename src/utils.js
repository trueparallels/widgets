import { split, pipe, map, concat, toUpper, head, toLower, tail, join, converge } from 'ramda'

export const capitalizeWord = converge(concat, [pipe(head, toUpper), pipe(tail, toLower)])

export const titleCase = pipe(
    split(' '),
    map(capitalizeWord),
    join(' ')
)