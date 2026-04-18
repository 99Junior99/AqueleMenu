import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    return (
        <div>
            <nav class="nav">
                <h2 class="log">LOGO</h2>


                <NavLink to='sobre'>
                    <button className='btn'>Sobre</button>
                </NavLink>
                <NavLink to="login">
                    <button className='btn'>Entrar</button>
                </NavLink>
                <NavLink to="cadastro">
                    <button className='btn'>Registro</button>
                </NavLink>
            </nav>
        </div>
    )
}

export default Navbar
