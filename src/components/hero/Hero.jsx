import React from 'react'
import "./Hero.css"
import food1 from "../../assets/food/vecteezy_hamburger-food-png-generative-ai_27147309.png"
import food2 from "../../assets/food/ChatGPT Image 19 de abr. de 2026, 12_16_23.png"
import food3 from "../../assets/food/delicious-spaghetti-with-vegetables-pan.png"
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
    return (
        <div class='hero'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={32}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}

            >
                <SwiperSlide>
                    <div className="card">
                        <img src={food1} alt="" />
                        <div className='hmsg'>
                            <h2>Aquele<span class="sub"> Menu</span></h2>
                            <span className='ms'>Crie seu próprio cardápio personalizado.</span>
                        </div>
                        <div className="ball"></div>
                        <div className="circle"></div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='cd2'>
                    <div className="card">
                        <img src={food2} alt="" />
                        <div className='hmsg'>
                            <h2>Aquele<span class="sub"> Perfil</span></h2>
                            <span className='ms'>Edite o perfil da sua loja.</span>
                        </div>
                        <div className="ball"></div>
                        <div className="circle"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img src={food3} alt="" />
                        <div className='hmsg'>
                            <h2>Aquele<span class="sub"> Serviço</span></h2>
                            <span className='ms'>Mostre e ofereça seus produtos.</span>
                        </div>
                        <div className="ball"></div>
                        <div className="circle"></div>
                    </div>

                </SwiperSlide>
            </Swiper>


        </div>
    )
}

export default Hero
