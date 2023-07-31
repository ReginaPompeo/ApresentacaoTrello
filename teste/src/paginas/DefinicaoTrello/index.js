import React from 'react';
import DefinicaoTrello from '../../components/img/QuadroTrello.png'; // Importe a imagem aqui
import './styled.css';

function DefinicaoComponent() {
    return (
        <>
            <div className='hero'>
                <section className="about" id="about">
                    <h2 className="title">O que é o Trello?</h2>
                    <div className="about-content">
                        <div className="column">
                            <div className="img-container">
                                <img src={DefinicaoTrello} alt="" className="img-def" />
                            </div>
                            <div className="text-container">
                                <div className="text-right-image">
                                    Agora sim podemos nos aprofundar no mundo do Trello. Começaremos entendendo 
                                    o que é essa ferramenta e qual é a sua funcionalidade.
                                    <br />
                                    <br />
                                    O Trello é uma ferramenta de gerenciamento de projetos ou colaboração que 
                                    contribui para o sucesso dos negócios e pela organização pessoal. 
                                    Ele permite você organizar suas tarefas em boards, além de poder criar um quadro e 
                                    atribuir a cada membro de sua equipe.
                                    <br />
                                    <br />
                                    Como todos os projetos estarão em andamento simultaneamente, será possível gerenciá-los bem 
                                    e ficar de olho no estágio de trabalho de sua equipe. 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default DefinicaoComponent;
