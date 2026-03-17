import React from 'react'
import "./Msg.css"
import food from "../../assets/food/roasted-chicken-dinner-platter-delicious-feast.png"
const Msg = () => {
    return (

        <div class="msg">
            <img src={food} alt="" />
            <h2>Personalize seus pratos da maneira que quiser.</h2>
        </div>

    )
}

export default Msg
