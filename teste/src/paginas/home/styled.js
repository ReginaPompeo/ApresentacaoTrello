import styled from "styled-components";

export const AreaHome = styled.div`
  .hero {
    color: white;
    padding-top: 20px;
  }
  .container1 {
    background-color: white;
    height: 200px;
    display: flex;
    flex-direction: column;
  }

section{
    padding: 50px 0;
}
section .title{
    color: #000;
    font-family: Hanuman;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.about{
    font-family: 'Ubuntu', sans-serif;;
    background-color: white;   
}

.about .title{
  text-align: right;
  padding-right: 105px;
  margin-top: 20px;

}

.about .about-content{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    text-shadow: 1px 1px  #000000;
}
.about .about-content .left{
  width: 45%;
  padding-left: 50px;
}
.about .about-content .right{
  width: 55%;
}
.about .about-content .right .text{
color: #000;
font-family: 'Ubuntu', sans-serif;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: justify;
padding-right: 100px; 
}
.about .about-content .right p{
  text-align: justify;
  font-size: 20px;
  padding-right: 60px;
}
.about .about-content .right a{
  display: inline-block;
  background: white;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 30px;
  margin-top: 20px;
  border-radius: 6px;
  border: 2px solid: white;
  transition: all 0.3s ease;
  box-shadow: 2px 2px #000000;
}
.about .about-content .right a:hover{
  color: white;
  background: none;
}
.about .about-content .left img{
  width: 500px;
  height: 250px;
  object-fit: cover;
  margin-left: 20px;
  padding-bottom: 70px;
}
`;
