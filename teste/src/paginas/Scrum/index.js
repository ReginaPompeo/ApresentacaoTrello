import React from 'react';
import Scrum from '../../components/img/Scrum.png'; // Importe a imagem aqui
import './styled.css';

function ScrumComponent() {
    return (
        <>
            <div className='hero' >
                <section className="about" id="about">
                    <h2 className="title">Metodologia Ágil Scrum</h2>
                    <div class="about-content">
                        <div class="column center">
                            <img src={Scrum} alt="" />
                        </div>
                        <div class="column under">
                            <div class="text">
                                {" "}
                                Hoje a equipe de TI vai apresentar a ferramenta Trello com o intuito de explicar e passar
                                informação sobre o uso dessa ferramenta para a organização profissional e pessoal.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default ScrumComponent;