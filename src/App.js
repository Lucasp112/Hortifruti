import React, { Component } from "react";
import Styled from "styled-components";
import GlobalStyle from "../Styles/global";

import alface from "./images/alface.png";
import laranja from "./images/laranja.png";
import beterraba from "./images/beterraba.png";
import cereja from "./images/cereja.png";
import limão from "./images/limão.png";
import manga from "./images/manga.png";
import tomate from "./images/tomate.png";
import cenoura from "./images/cenoura.png";
import cart from "./images/cart.png";

const Container = Styled.div`
display: flex;
flex-wrap: wrap;
width: 40vw;
height: 40vh;
img{
  width: 10vw;
}
`;

const Header = Styled.header`
width: 100%;
height: 20vh;
font-size: 40px;
h1{
  color: whitesmoke;
}

h2{
  color: whitesmoke;
}
`;

const Main = Styled.main`
width: 100%;
height: 80vh;
display: flex;
justify-content: space-around;
align-items: center;
`;

const Section = Styled.section`
width: 25vw;
height: 55vh;
border-radius: 20%;
background-color: gray;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;

button{
  width: 3vw;
  height:5vh;
  background-color: whitesmoke;
  border-radius: 70%;
}
`;

const DivBox = Styled.div`
background-color: whitesmoke;
width: 20vw;
height: 30vh;
border: solid 2px;
border-radius: 15%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;



img{
  background-color: whitesmoke;
  width: 8vw;
  height: 13vh;
}

p{
  background-color: whitesmoke;
  text-align: center;
}
`;
const DivBox2 = Styled.div`
background-color: gray;
width: 10vw;
height:6vh;
display: flex;
justify-content: space-around;
`;

class App extends Component {
  state = {
    Container: [
      {
        Fruta: alface,
        alt: "alface"
      },
      {
        Fruta: laranja,
        alt: "laranja"
      },
      {
        Fruta: beterraba,
        alt: "beterraba"
      },
      {
        Fruta: cereja,
        alt: "cereja"
      },
      {
        Fruta: limão,
        alt: "limão"
      },
      {
        Fruta: manga,
        alt: "manga"
      },
      {
        Fruta: tomate,
        alt: "tomate"
      },
      {
        Fruta: cenoura,
        alt: "cenoura"
      }
    ]
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Header>
          <h1>Hortifruti VnW</h1>
          <h2>Nossos Produtos</h2>
        </Header>
        <Main>
          <Container>
            {this.state.Container.map((item) => (
              <img src={item.Fruta} alt={item.alt} />
            ))}
          </Container>
          <Section>
            <DivBox>
              <img src={cart} alt="" />
              <p>Arraste o seu produto aqui para colocar no carrinho</p>
            </DivBox>
            <DivBox2>
              <button>+</button>
              <button>-</button>
            </DivBox2>
          </Section>
        </Main>
      </>
    );
  }
}

export default App;
