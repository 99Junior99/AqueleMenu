import React from 'react'
import "./Msg.css"
import food from "../../assets/food/roasted-chicken-dinner-platter-delicious-feast.png"

import um from "../../assets/msg-slide/1.png"
import dois from "../../assets/msg-slide/2.png"
import três from "../../assets/msg-slide/3.png"

const Msg = () => {
    return (

        <div class="msg">
            <img src={food} alt="" />
            <h2>Personalize seus pratos do jeito que quiser.</h2>
            <div className="wrapper">
                <div className="slide">

                    <img src={um} alt="" />
                </div>
                <div className="slide">

                    <img src={dois} alt="" />
                </div>  <div className="slide">

                    <img src={três} alt="" />
                </div>
            </div>


        </div>

    )
}

export default Msg
