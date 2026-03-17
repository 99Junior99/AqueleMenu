import React from 'react'
import Navbar from "../../components/navbar/Navbar.jsx"
import Hero from "../../components/hero/Hero.jsx"
import Msg from "../../components/msg/Msg.jsx"
import "./Home.css"
const Home = () => {
    return (
        <div className='landing'>
            <Navbar />
            <Hero />
            <Msg />
        </div>
    )
}

export default Home
