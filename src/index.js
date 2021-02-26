import ReactDom from 'react-dom'
import React from 'react'

import { Navbar } from './components/Navbar.jsx'
import { App } from './components/App.jsx'

function Application(){
    return(
    <div>
        
        {/* <Navbar /> */}
        <App />
    </div>
    )
}

ReactDom.render(
    <Application />,
    document.getElementById('app')
)

