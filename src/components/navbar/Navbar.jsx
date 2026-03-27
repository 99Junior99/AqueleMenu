import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    return (
        <div>
            <nav class="nav">
                <h2 class="log">LOGO</h2>
                <NavLink to="/" end>
                    <button>asas</button>
                </NavLink>

                <NavLink> <button>Sobre</button></NavLink>
                <NavLink to="login"><button>Entrar</button></NavLink>
                <NavLink to="cadastro"><button>Registro</button></NavLink>
            </nav>
        </div>
    )
}

export default Navbar
