import React from 'react'
import {Box, Container, Row, Column, FooterLink, Heading, LogoF} from './styled';
import LogoFooter from '../img/LogoFooter.png';


function Footer() {
  return (
    <>
      <Box>
      <LogoF className='logofooter' to="/">
        <img src={LogoFooter} alt='logo FEBRAPO'/>
      </LogoF>
      <Container>
        <Row>
          <Column className='menu'>
            <Heading>Menu</Heading>
            <FooterLink to="/" ActiveStyle>Home</FooterLink>
            <FooterLink to="/scrum" ActiveStyle>Scrum</FooterLink>
            <FooterLink to="/definicaotrello" ActiveStyle>Definição Trello</FooterLink>
            <FooterLink to="/meusquadros" ActiveStyle>Meus Quadros</FooterLink>
          </Column>
          <Column className='integrantes'>
            <Heading>Desenvolvedores</Heading>
            <FooterLink to='' ActiveStyle>Fábio Soares</FooterLink>
            <FooterLink to='' ActiveStyle>Reginaldo Alves</FooterLink>
            <FooterLink to="" ActiveStyle>Regina Pompeo</FooterLink>
          </Column>
        </Row>
      </Container>
      <p style={{textAlign: "center", paddingTop: "20px", color: "white"}}>
        Copyright @ Equipe de TI FEBRAPO | Todos os direitos reservados
      </p>
      </Box>
    </>
  )
}

export default Footer