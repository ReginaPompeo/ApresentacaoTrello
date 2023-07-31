import styled from "styled-components";

export const AreaHome = styled.div`
.img-apresentacao {
  width: 600px;
  height: 400px;
  margin-left: 100px;
  margin-top: 0px;
  margin-bottom: 30px;
}
.hero {
  background-color: LightBlue;
    padding-top: 20px;
  }

  /* Estilos para a classe "title" */
  .TituloApresentacao {
    color: #0000CD;
    font-family: Hanuman;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    padding-left: 640px;
  }
  /* Estilo para o subtítulo */
  .SubtituloApresentacao {
  color: black;
  font-size: 22px;
  font-weight: 500;
  margin-top: 5px;
  margin-left: 580px;
  }


  /* Posicionamento dos elementos */
  .column {
      display: flex;
      align-items: right;
  }
  
  .img-container {
      flex: 0 0 auto;
      margin-right: 20px;
  }
  
  .text-container {
      flex: 1 1 auto;
  }

  /* Estilo para o texto abaixo da imagem */
  .text-right-image {
      color: #000;
      text-align: justify;
      font-family: Hanuman, sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-right: 100px;
      margin-left: 30px;
      margin-top: 50px;
  }
  
`

