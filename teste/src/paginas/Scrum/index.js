import React from 'react';
import Scrum from '../../components/img/Scrum.png'; // Importe a imagem aqui
import './styled.css';

function ScrumComponent() {
    return (
        <>
            <div className='heroScrum'>
                <section className="about" id="about">
                    <h2 className="title">Metodologia Ágil Scrum</h2>
                    <div className="about-content">
                        <div className="column center">
                            <img src={Scrum} alt="" className="img-scrum" />
                        </div>
                    </div>
                </section>
                {/* Div para inserir texto abaixo da imagem */}
                <div className="text-below-image">
                    Antes de começar a explicar sobre a ferramenta, 
                    nós achamos interessante trazer primeiro uma introdução sobre o que é a metodologia ágil Scrum, 
                    pois é a partir dela que nós montamos o nosso quadro e também iremos começar a implementar
                    para auxiliar no desenvolvimento dos nossos projetos. 
                    <br />
                    <br />
                    A Metodologia Scrum é considerada um método ágil. 
                    Trata-se de um framework (conjunto de ações e estratégias para solucionar problemas) normalmente 
                    utilizado com projetos mais complexos. 
                    <br />
                    <br />
                    O conceito principal é a ideia de finalizar um projeto mais rápido, com melhor qualidade, 
                    otimizando os recursos humanos e materiais. Além disso, potencializa o trabalho em equipe com 
                    foco no cumprimento dos prazos estipulados por meio do acompanhamento da evolução do projeto.
                </div>
            </div>
        </>
    );
}
export default ScrumComponent;
