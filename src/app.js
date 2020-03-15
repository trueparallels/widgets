import React from 'react'
import { Router } from '@reach/router'

import ListView from './views/listview'
import ChartView from './views/chartview'
import InfoView from './views/infoview'

const App = () => {
    return (
        <Router>
            <ListView path="/" />
            <ChartView path="/chart" />
            <InfoView path="/info/:widgetId" />
        </Router>
    )
}

export default App
