import React from 'react'
import Criacao from '../../components/img/CriacaoQuadro.png'
import Auto from '../../components/img/TesteAuto.png'
import './styles.css';
import { Link } from 'react-router-dom';


function MeusQuadros() {
    return (
      <>
        <div className='hero'>
          <section className="about" id="about">
            <h3 className="TituloCriacao">Como criar um quadro?</h3>
            <div className="about-content">
              <div className="column-criacao">
                <div className="img-criacaoQuadro">
                  <img src={Criacao} alt="" className="img-criacao" />
                </div>
                <div className="text-container">
                  <div className="text-right-image">
                  A criação dos quadros no Trello é bem simples e rápida, a própria ferramenta conta com opção de templates 
                  prontos para serem usados conforme o que você necessita. Porém, melhor do que apenas falar, nós 
                  vamos simular a criação de um.
                  </div>
                  </div>
              </div>
            </div>
            <div className="botao-container">
                  <Link to="https://trello.com/u/ti139/boards" target="_blank" rel="noopener noreferrer" className="botao-retangular">
                  Criar um quadro
                  </Link>
                </div>
          </section>
        </div>
  
        {/* Novo conteúdo */}
        <div className='hero'>
          <section className="about" id="about">
            <h3 className="TituloAuto">Testando as automatizações</h3>
            <div className="about-content">
              <div className="column-auto">
                <div className="img-auto">
                  <img src={Auto} alt="" className="img-automatizacao" />
                </div>
                <div className="text-container">
                  <div className="text-left-image">
                  Além de criar o quadro e organizar, é possível também automatizar alguns processos para trabalhar 
                  melhor no dia a dia e ter agilidade no processo. 
                  Com os mais de 100 Power-Ups no Trello é possível criar automações personalizadas nos seus quadros. 
                  Explore as possibilidades da automatização no Trello e aumente a eficiência do seu fluxo de trabalho.
                    <br />
                    <br />
                    Nós iremos  mostrar agora um pouco de como esses Power-Ups podem ajudar no cotidiano de uma equipe. 
                  </div>
                </div>
              </div>
            </div>
            <div className="botao-container2">
                  <Link to="https://trello.com/b/XckDA7wA/time-ti-febrapo" target="_blank" rel="noopener noreferrer" className="botao-retangular2">
                  Testar automatizações
                  </Link>
                </div>
                <h3 className="TituloPowerUp">Power-Ups</h3>
                <h3 className="SubtituloPowerUp">Google Agenda</h3>
                <div className="text-powerups">
                 Esse Power-up é uma conexão direta entre o Google Agenda e o Trello, onde todos os eventos criados
                 na lista "Eventos" do Trello, serão criados automaticamente no Google Agenda e vice-versa.
                 <br />
                 Assim nós podemos ter um maior controle de treinamentos, reuniões ou qualquer tipo de evento simultaneamente.
                </div>
                <h3 className="SubtituloPowerUp">Repetidor</h3>
                <div className="text-powerups">
                 O Power-Up Repetidor é utilizado para repetir determinada ação no quadro automaticamente, agilizando ainda mais o trabalho.
                 Um exemplo que utilizamos muito em nosso quadro, é a repetição de tarefas recorrentes, como a reunião semanal de segunda-feira.
                 Em nossa lista de "Eventos", a reunião semanal já está automatizada para que todas às segundas-feiras ela já esteja presente 
                 na nossa organização.
                </div>
                <h3 className="SubtituloPowerUp">Corello</h3>
                <div className="text-powerups">
                 Outro Power-Up que tilizamos é o Corello, ele é um dashboard com todas as informações sobre as ações de cada membro do quadro.
                 Pode ser visto relatórios diários, semanais e mensais. Conseguimos obter a informações de quantas demandas tivemos, 
                 quantas conseguimos concluir, quantas ainda estão em andamento. O Corello também consegue nos da a informação de quanto tempo
                 nos dedicamos para cada demanda, assim que ela entra na lista de "Em andamento" e "Fase de teste".
                 <br />
                 Apesar desse Power-Up ter um teste de 15 dias gratuitos, para utilizar essa extensão, é necessário a assinatura 
                 de $15 ou R$71,08 (contando com a cotação do dólar do dia de hoje) mensalmente ou $12 (R$56,86) por mês aderindo o
                 plano anual, o que daria um total de $144 (R$682,32) para o período de um ano.
                 
                </div>
          </section>
        </div>
      </>
    );
  }
  
export default MeusQuadros;
