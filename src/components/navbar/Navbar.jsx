import { React, useRef } from 'react'
import { NavLink } from "react-router-dom";



import "./Navbar.css"
const Navbar = () => {
    const targetRef = useRef(null);

    const scrollToComponent = () => {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <nav class="nav">
                <h2 class="log">LOGO</h2>


                <NavLink to='sobre'>
                    <button className='btn' onClick={scrollToComponent}>Sobre</button>
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
