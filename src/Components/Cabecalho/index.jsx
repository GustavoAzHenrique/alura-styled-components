import React from "react";
import styled from "styled-components";

import bank_logo from "../../assets/images/bank_logo.svg";

import { corPrimaira } from "../UI/variaveis";

const StyledHeader = styled.nav`
  background-color: ${corPrimaira};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: black;

  background: ${(props) => (props.primary ? "#fff" : corPrimaira)};
  background: ${(props) => (props.primary ? corPrimaira : "#fff")};
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho href="https://google.com">Ajuda</BtnCabecalho>
        <BtnCabecalho primary href="https://google.com">
          Sair
        </BtnCabecalho>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
