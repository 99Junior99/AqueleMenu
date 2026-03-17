import React from 'react'
import "./Login.css"
const Login = () => {
    return (
        <div className="login-container">
            <main className="login-main">

                {/* LADO ESQUERDO - FORMULÁRIO */}
                <section className="login-esquerdo">
                    <div className="logo-topo">
                        <a href="/" className="voltar-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            <span>Voltar</span>
                        </a>
                    </div>

                    <div className="form-wrapper">
                        <h1>Bem-vindo de volta!</h1>
                        <p className="subtitle">Gerencie seus pratos e expanda seu Cardápio.</p>

                        <form className="login-form">
                            {/* Campo Email */}
                            <div className="input-group">
                                <label>Email</label>
                                <div className="input-with-icon">
                                    <svg className="input-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <input type="email" placeholder="seu@email.com" />
                                </div>
                            </div>

                            {/* Campo Senha */}
                            <div className="input-group">
                                <label>Senha</label>
                                <div className="input-with-icon">
                                    <svg className="input-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <input type="password" placeholder="••••••••" />
                                </div>
                                {/* Opcional: Link para recuperar senha */}
                                <div className="esqueceu-senha">
                                    <a href="/recuperar-senha">Esqueceu sua senha?</a>
                                </div>
                            </div>

                            <button type="submit" className="btn-entrar">
                                Entrar
                            </button>
                        </form>

                        <p className="cadastro-link">
                            Ainda não tem uma conta? <a href="/cadastro">Crie uma aqui</a>
                        </p>
                    </div>
                </section>

                {/* LADO DIREITO - DESTAQUE */}
                <section className="login-direito">
                    <div className="destaque-conteudo">
                        <div className="quadrado-amarelo">🚀</div>
                        <h2>Pronto para vender?</h2>
                        <p>
                            Configure o seu cardápio, adicione e remova seus pratos da forma que quiser tudo isso em um unico lugar.
                        </p>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Login
