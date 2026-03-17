import React from 'react';
import './Cadastro.css';

const Cadastro = () => {
  return (
    <div className="cadastro-container">
      <main className="cadastro-main">

        {/* LADO ESQUERDO - FORMULÁRIO */}
        <section className="cadastro-esquerdo">
          <div className="logo-topo">
            <a href="/" className="voltar-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>Voltar</span>
            </a>
          </div>

          <div className="form-wrapper">
            <h1>Crie sua conta aqui!</h1>
            <p className="subtitle">Comece aqui o seu cardápio profissional</p>

            <form className="cadastro-form">
              {/* Campo Nome da Loja */}
              <div className="input-group">
                <label>Nome da sua loja</label>
                <div className="input-with-icon">
                  <svg className="input-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <input type="text" placeholder="Minha Loja" />
                </div>
              </div>

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
              </div>

              <button type="submit" className="btn-criar">
                Criar conta
              </button>
            </form>

            <p className="login-link">
              Já tem uma conta? <a href="/login">Faça login</a>
            </p>
          </div>
        </section>

        {/* LADO DIREITO - DESTAQUE */}
        <section className="cadastro-direito">
          <div className="destaque-conteudo">
            <div className="quadrado-amarelo">🏪</div>
            <h2>Catálogo profissional</h2>
            <p>
              Milhares de lojistas já usam o Cataloguei para <br />
              vender mais pelo WhatsApp.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Cadastro;