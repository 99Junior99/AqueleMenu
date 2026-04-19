import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Error.css"
const Error = () => {
    return (
        <div className='error'>
            <div class="ocean">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            <div className='text'>
                <h1>404</h1>
                <h2>Algo deu errado :(</h2>
                <NavLink to="/">

                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span>Voltar ao início</span>
                </NavLink>
            </div>


        </div>
    )
}

export default Error
