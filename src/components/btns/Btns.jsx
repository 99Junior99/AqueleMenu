import React, { useState, useEffect, useRef } from 'react'
import './Btns.css'
const Btns = () => {
    const [visivel, setVisivel] = useState(false);
    const [visivel2, setVisivel2] = useState(false);
    const [visivel3, setVisivel3] = useState(false);

    const elementoRef = useRef(null);
    const elementoRef2 = useRef(null);
    const elementoRef3 = useRef(null);

    // Mostra ao clicar no botão
    const mostrar = (e) => {
        e.stopPropagation(); // evita fechar imediatamente
        setVisivel(true);
    };
    const mostrar2 = (e) => {
        e.stopPropagation(); // evita fechar imediatamente
        setVisivel2(true);
    };
    const mostrar3 = (e) => {
        e.stopPropagation(); // evita fechar imediatamente
        setVisivel3(true);
    };

    // Detecta clique fora
    useEffect(() => {
        const handleClickFora = (event) => {
            if (
                elementoRef.current &&
                !elementoRef.current.contains(event.target)
            ) {
                setVisivel(false);
            }
        };
        const handleClickFora2 = (event) => {
            if (
                elementoRef2.current &&
                !elementoRef2.current.contains(event.target)
            ) {
                setVisivel2(false);
            }
        };
        const handleClickFora3 = (event) => {
            if (
                elementoRef3.current &&
                !elementoRef3.current.contains(event.target)
            ) {
                setVisivel3(false);
            }
        };

        document.addEventListener("click", handleClickFora);
        document.addEventListener("click", handleClickFora2);
        document.addEventListener("click", handleClickFora3);
        return () => {
            document.removeEventListener("click", handleClickFora);
            document.removeEventListener("click", handleClickFora2);
            document.removeEventListener("click", handleClickFora3);
        };
    }, []);

    return (
        <div>
            <div className='content'>
                <h2 className='title'>Botões</h2>
                <div className='btns'>
                    <button className='cad' onClick={mostrar}>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M127.9 78.4C127.1 70.2 120.2 64 112 64C103.8 64 96.9 70.2 96 78.3L81.9 213.7C80.6 219.7 80 225.8 80 231.9C80 277.8 115.1 315.5 160 319.6L160 544C160 561.7 174.3 576 192 576C209.7 576 224 561.7 224 544L224 319.6C268.9 315.5 304 277.8 304 231.9C304 225.8 303.4 219.7 302.1 213.7L287.9 78.3C287.1 70.2 280.2 64 272 64C263.8 64 256.9 70.2 256.1 78.4L242.5 213.9C241.9 219.6 237.1 224 231.4 224C225.6 224 220.8 219.6 220.2 213.8L207.9 78.6C207.2 70.3 200.3 64 192 64C183.7 64 176.8 70.3 176.1 78.6L163.8 213.8C163.3 219.6 158.4 224 152.6 224C146.8 224 142 219.6 141.5 213.9L127.9 78.4zM512 64C496 64 384 96 384 240L384 352C384 387.3 412.7 416 448 416L480 416L480 544C480 561.7 494.3 576 512 576C529.7 576 544 561.7 544 544L544 96C544 78.3 529.7 64 512 64z" /></svg>
                        Cadastrar Prato
                    </button>
                    <button className='cad' onClick={mostrar2}>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" /></svg>
                        Cadastrar Pessoas
                    </button>
                    <button className='cad' onClick={mostrar3}>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M94.7 136.3C101.6 112.4 123.5 96 148.4 96L492.4 96C517.3 96 539.2 112.4 546.2 136.3L569.6 216.5C582.4 260.2 549.5 304 504 304C477.7 304 454.6 289.1 443.2 266.9C431.6 288.8 408.6 304 381.8 304C355.2 304 332.1 289 320.5 267C308.9 289 285.8 304 259.2 304C232.4 304 209.4 288.9 197.8 266.9C186.4 289 163.3 304 137 304C91.4 304 58.6 260.3 71.4 216.5L94.7 136.3zM160.4 416L480.4 416L480.4 349.6C488 351.2 495.9 352 503.9 352C518.2 352 531.9 349.4 544.4 344.8L544.4 496C544.4 522.5 522.9 544 496.4 544L144.4 544C117.9 544 96.4 522.5 96.4 496L96.4 344.8C108.9 349.4 122.5 352 136.9 352C145 352 152.8 351.2 160.4 349.6L160.4 416z" /></svg>
                        Cadastrar loja
                    </button>
                </div>
                {visivel && (
                    <div className="cad-content" ref={elementoRef}>

                        <form className='form' action="">
                            <div className="image"> <label >Imagem</label>
                                <input className='img' type='file' />

                            </div>
                            <div className="nome">
                                <input type="text" placeholder='Nome:' />
                            </div>
                            <div className="cate">

                                <input type="text" placeholder='Categoria:' />
                            </div>
                            <div className="desc">

                                <textarea name="" id="" placeholder='Descrição:'></textarea>
                            </div>
                            <button type="submit">
                                cadastrar
                            </button>

                        </form>
                    </div>
                )}
                {visivel2 && (
                    <div className="cad-content2" ref={elementoRef2}>

                        <form className='form' action="">
                            <div className="image">
                                <label>Imagem</label>
                                <input className='img' type='file' accept='image/*' />

                            </div>
                            <div className="nome">


                                <input type="text" placeholder='Nome:' />
                            </div>

                            <div className="cpf">

                                <input type="text" placeholder='CPF:' />
                            </div>

                            <div className="cpf">

                                <input type="email" placeholder='Email:' />
                            </div>
                            <button type="submit">
                                cadastrar
                            </button>
                        </form>
                    </div>
                )}
                {visivel3 && (
                    <div className="cad-content2" ref={elementoRef3}>

                        <form className='form' action="">
                            <div className="image">
                                <label>Imagem</label>
                                <input className='img' type='file' accept='image/*' />

                            </div>
                            <div className="nome">


                                <input type="text" placeholder='Nome:' />
                            </div>

                            <div className="desc">

                                <textarea name="" id="" placeholder='Descrição:'></textarea>
                            </div>
                            <button type="submit">
                                cadastrar
                            </button>
                        </form>
                    </div>
                )}

                <div className='msg'>
                    <h2 className='title'>aaaaaa</h2>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, minus?</span>
                </div>
            </div >
        </div>
    )
}

export default Btns
