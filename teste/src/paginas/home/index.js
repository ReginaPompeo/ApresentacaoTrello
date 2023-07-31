import React from 'react'
import { AreaHome } from './styled'
import TrelloHome from '../../components/img/TrelloHome.jpg'


function Home() {
  return (
    <>
      <AreaHome>
      <div className='hero'>
                <section className="about" id="about">
                    <h2 className="TituloApresentacao">Bom dia, café com sabedoria!</h2>
                    <h3 className="SubtituloApresentacao">Hoje o nosso tema será sobre o uso da ferramenta Trello</h3>
                    <div className="about-content">
                        <div className="column">
                            <div className="img-container">
                                <img src={TrelloHome} alt="" className="img-apresentacao" />
                            </div>
                            <div className="text-container">
                                <div className="text-right-image">
                                    Hoje a equipe de TI vai apresentar a ferramenta Trello com o intuito de explicar e 
                                    informar sobre o uso dessa ferramenta para a organização profissional e pessoal.
                                    <br />
                                    <br />
                                    O Trello é bastante utilizado no mundo corporativo, 
                                    mas para aqueles que gostam de organização e planejamento,
                                    essa pode ser uma boa aposta na hora de aderir um planner virtual.
                                </div>
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
