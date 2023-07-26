import React from "react";
import "./styled.css";
import { Link } from "react-router-dom";

function SobreNos() {
  return (
    <>
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
            <Link to="/SignUp">Junte-se à comunidade!</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default SobreNos;
