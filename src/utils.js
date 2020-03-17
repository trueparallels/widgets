import { split, pipe, map, concat, toUpper, head, toLower, tail, join, converge, find, prop, propEq, groupBy, reduce, add } from 'ramda'
import { parseISO, getYear } from 'date-fns/fp'

export const capitalizeWord = converge(concat, [pipe(head, toUpper), pipe(tail, toLower)])

export const titleCase = pipe(
    split(' '),
    map(capitalizeWord),
    join(' ')
)

export const idEquals = propEq('id')
export const findWidgetById = (id, data) => find(idEquals(id), data)

export const getYearFromDate = pipe(
    prop('timestamp'),
    parseISO,
    getYear
)

export const getYearlySum = pipe(
    map(prop('revenue')),
    reduce(add, 0)
)

export const prepareChartData = pipe(
    groupBy(getYearFromDate),
    map(getYearlySum)
)