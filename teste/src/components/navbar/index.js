import React, { Component } from "react";
import { Link as NavLink } from "react-router-dom";
import LogoFebrapoPeq from "../img/LogoFebrapoPeq.png";
import LogoFebrapoGrande from '../../components/img/LogoFebrapoGrande.png'
import "./styled.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
      <div className='container1' style={{
            backgroundImage: `url(${LogoFebrapoGrande})`, // Corrigido o uso das template strings
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "300px 70px",
            marginTop: "10px",
            marginLeft: "auto",
      }}>
          </div>
        <nav className='sticky'>
          <NavLink to="/">
            <img className="logo" src={LogoFebrapoPeq} alt="" />
          </NavLink>
          <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
            <li>
              <NavLink to="/Scrum" className="active">
                SCRUM
              </NavLink>
            </li>
            <li>
              <NavLink to="/DefinicaoTrello" className="active">
                DEFINIÇÃO TRELLO
              </NavLink>
            </li>
            <li>
              <NavLink to="/MeusQuadros" className="active">
                MEUS QUADROS
              </NavLink>
            </li>
          </ul>
          <div id="mobile" onClick={this.handleClick}>
            <iconClass id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></iconClass>     
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
