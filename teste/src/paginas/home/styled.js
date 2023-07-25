import styled from "styled-components";

export const AreaHome = styled.div`
  .hero {
    color: white;
  }
  .container1 {
    background-color: white;
    height: 1000px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .container2 {
    height: 200px;
    color: white;
    margin-top: 200px;
    margin-left: 300px;
    backgroundPosition: left top;
    h1 {
      color: DodgerBlue;
      font-size: 60px;
      text-shadow: 2px 2px RoyalBlue;
    }
  }

  
}
  .buttom{
    margin-left: 60px;

    @media screen and (max-width: 1632px){
        margin-top: -40px;
        transition: 0.3s ease-in-out;
    }
    @media screen and (max-width: 718px){
        margin-top: 60px;
        transition: 0.3s ease-in-out;
    }
    @media screen and (max-width: 452px){
        margin-top: 130px;
        transition: 0.3s ease-in-out;
    }
    @media screen and (max-width: 392px){
        margin-top: 200px;
        transition: 0.3s ease-in-out;
    }
  }
  section {
    padding: 100px 0;
    margin-left: left left;
}

section .title {
    font-family: 'Ubuntu', sans-serif;
    text-align: center;
    font-size: 40px;
    color: royalblue;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    text-shadow: 2px 2px #000000;
}

.about {
    font-family: 'Roboto', sans-serif;
    background: blue(61, 107, 11);
    background: linear-gradient(
        260deg,
        rgb(12, 106, 163) 0%,
        rgb(19, 109, 139) 90%); /* Aumenta o tamanho da cor de fundo gradiente */
}

`;
