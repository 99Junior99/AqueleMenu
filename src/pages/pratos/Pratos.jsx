import React from 'react'
//Componentes
import Sidebar from '../../components/sidebar/Sidebar'
import Lista from '../../components/lista/Lista'
import './Pratos.css'

const Pratos = () => {
    return (
        <div className='pratos'>
            <Sidebar />
            <Lista />
        </div>
    )
}

export default Pratos
