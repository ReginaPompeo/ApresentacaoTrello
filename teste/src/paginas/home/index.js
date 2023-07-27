import React from 'react'
import { AreaHome } from './styled'
import LogoFebrapoGrande from '../../components/img/LogoFebrapoGrande.png'
import TrelloHome from '../../components/img/TrelloHome.jpg'


function Home() {
  return (
    <>
      <AreaHome>
        <div className='hero' >
          <div className='container1' style={{
            backgroundImage: `url(${LogoFebrapoGrande})`, // Corrigido o uso das template strings
            backgroundRepeat: "no-repeat",
            backgroundSize: "600px 150px",
            backgroundPosition: "center top" // Centraliza a imagem
            
          }}>
            </div>
          <section className="about" id="about">
        <h2 className="title">Apresentação café com sabedoria!</h2>
        <div class="about-content">
          <div class="column left">
            <img src={TrelloHome} alt="" />
          </div>
          <div class="column right">
            <div class="text">
              {" "}
              Hoje a equipe de TI vai apresentar a ferramenta Trello com o intuito de explicar e passar 
              informação sobre o uso dessa ferramenta para a organização profissional e pessoal.
            </div>
          </div>
        </div>
      </section>
      </div>
      </AreaHome>
    </>
  );
}
export default Home;
