import React from 'react'
import "./Hero.css"
import food from "../../assets/food/vecteezy_hamburger-food-png-generative-ai_27147309.png"


const Hero = () => {
    return (
        <div class='hero'>
            <img src={food} alt="" />
            <div className='hmsg'>
                <h2>Aquele<span class="sub">Menu</span></h2>
                <span>Um cardápio do seu jeito, feito especialmente para você.</span>
            </div>

        </div>
    )
}

export default Hero
