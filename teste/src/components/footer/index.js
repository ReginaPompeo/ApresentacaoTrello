import React from 'react'
import {Box, Container, Row, Column, FooterLink, Heading, Logo} from './styled';
import LogoFooter from '../img/LogoFooter.png';


function Footer() {
  return (
    <>
      <Box>
      <Logo className='logo' to="/">
        <img src={LogoFooter} alt='logo FEBRAPO'/>
      </Logo>
      <Container>
        <Row>
          <Column className='menu'>
            <Heading>Menu</Heading>
            <FooterLink to="/" ActiveStyle>HOME</FooterLink>
            <FooterLink to="/noticias" ActiveStyle>NOTICIAS</FooterLink>
            <FooterLink to="/sobre" ActiveStyle>SOBRE NÓS</FooterLink>
            <FooterLink to="/comofunciona" ActiveStyle>COMO FUNCIONA</FooterLink>
            <FooterLink to="/forum" ActiveStyle>FORUM</FooterLink>
            <FooterLink to="/signup" ActiveStyle>CADASTRO | LOGIN</FooterLink>
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