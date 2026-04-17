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
                    <button className='cad'>Cadastrar Prato
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M127.9 78.4C127.1 70.2 120.2 64 112 64C103.8 64 96.9 70.2 96 78.3L81.9 213.7C80.6 219.7 80 225.8 80 231.9C80 277.8 115.1 315.5 160 319.6L160 544C160 561.7 174.3 576 192 576C209.7 576 224 561.7 224 544L224 319.6C268.9 315.5 304 277.8 304 231.9C304 225.8 303.4 219.7 302.1 213.7L287.9 78.3C287.1 70.2 280.2 64 272 64C263.8 64 256.9 70.2 256.1 78.4L242.5 213.9C241.9 219.6 237.1 224 231.4 224C225.6 224 220.8 219.6 220.2 213.8L207.9 78.6C207.2 70.3 200.3 64 192 64C183.7 64 176.8 70.3 176.1 78.6L163.8 213.8C163.3 219.6 158.4 224 152.6 224C146.8 224 142 219.6 141.5 213.9L127.9 78.4zM512 64C496 64 384 96 384 240L384 352C384 387.3 412.7 416 448 416L480 416L480 544C480 561.7 494.3 576 512 576C529.7 576 544 561.7 544 544L544 96C544 78.3 529.7 64 512 64z" /></svg>
                    </button>

                    <div className="cad-content">
                        <form className='form' action="">
                            <div className="image">
                                <input className='img' type='file' />
                                <label>Imagem: </label>
                            </div>
                            <div className="nome">

                                <label>Nome: </label>
                                <input type="text" />
                            </div>
                            <div className="cate">
                                <label>Categoria: </label>
                                <input type="text" />
                            </div>
                            <div className="desc">
                                <label>Descrição: </label>
                                <textarea name="" id=""></textarea>
                            </div>

                        </form>
                    </div>


                    <button className='cad'>Cadastrar loja <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M94.7 136.3C101.6 112.4 123.5 96 148.4 96L492.4 96C517.3 96 539.2 112.4 546.2 136.3L569.6 216.5C582.4 260.2 549.5 304 504 304C477.7 304 454.6 289.1 443.2 266.9C431.6 288.8 408.6 304 381.8 304C355.2 304 332.1 289 320.5 267C308.9 289 285.8 304 259.2 304C232.4 304 209.4 288.9 197.8 266.9C186.4 289 163.3 304 137 304C91.4 304 58.6 260.3 71.4 216.5L94.7 136.3zM160.4 416L480.4 416L480.4 349.6C488 351.2 495.9 352 503.9 352C518.2 352 531.9 349.4 544.4 344.8L544.4 496C544.4 522.5 522.9 544 496.4 544L144.4 544C117.9 544 96.4 522.5 96.4 496L96.4 344.8C108.9 349.4 122.5 352 136.9 352C145 352 152.8 351.2 160.4 349.6L160.4 416z" /></svg></button>

                </div>
                <div className='msg'>
                    <h2 className='title'>aaaaaa</h2>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, minus?</span>
                </div>
            </div >

        </div >
    )
}

export default dashboard
