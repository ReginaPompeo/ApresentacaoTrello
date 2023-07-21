import React from 'react'
import { AreaHome } from './styled'
import LogoFebrapoHome from '../../components/img/LogoFebrapoHome.png'
import TrelloImg1 from '../../components/img/TrelloImg1.png'

function Home() {
  return (
    <>
      <AreaHome>
        <div className='hero' >
          <div className='container1' style={{
            backgroundImage: `url(${LogoFebrapoHome})`, // Corrigido o uso das template strings
            backgroundRepeat: "no-repeat",
            backgroundSize: "600px 150px",
            backgroundPosition: "center top" // Centraliza a imagem
            
          }}>
            <div className='container2' style={{
              backgroundImage: `url(${TrelloImg1})`, // Corrigido o uso das template strings
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left top " // Centraliza a imagem >
            }}>
            </div>
          </div>
        </div>
      </AreaHome>
    </>
  )
}

export default Home
