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
            <div className='container2' style={{
              backgroundImage: `url(${TrelloHome})`, // Corrigido o uso das template strings
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left top " // Centraliza a imagem >
            }}>
            <section className="about" id="about">
        <div class="about-content">
          <div class="column left">
          </div>
          <div class="column right">
            <div class="text">
              Apresentação café com sabedoria!
            </div>
            <p>
              Hoje a equipe de TI vai apresentar a ferramenta Trello com o intuito de explicar e passar 
              informação sobre o uso dessa ferramenta para a organização profissional e pessoal.
            </p>
          </div>
        </div>
      </section>
      </div>
    </div>
   </div>
      </AreaHome>
    </>
  )
}
export default Home;
