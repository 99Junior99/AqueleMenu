import React from 'react'

import Sidebar from '../../components/sidebar/Sidebar'

import './Dashboard.css'
const dashboard = () => {
    return (
        <div className='dashboard'>

            <Sidebar />
            <div className='content'>
                <h2 className='title'>Botões</h2>
                <div className='btns'>
                    <button className='cad'>Cadastrar Prato</button>
                    <button className='cad'>Cadastrar loja</button>
                    <button className='cad'>Cadastrar Prato</button>
                    <button className='cad'>Cadastrar loja</button>
                </div>
            </div>

        </div>
    )
}

export default dashboard
