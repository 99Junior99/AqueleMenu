import React from 'react'

//components
import Sidebar from '../../components/sidebar/Sidebar'
import Btns from '../../components/btns/Btns'

import './Dashboard.css'
const dashboard = () => {

    return (
        <div className='dashboard'>
            <Sidebar />
            <Btns />
        </div >
    )
}

export default dashboard
