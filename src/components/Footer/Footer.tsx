import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const FirstBody = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px;

  a {
    color: #acacacff;
    padding: 10px 10px 10px 10px;
    font-size: 18px;
    font-family: 'Pkmn', Times, serif;
  }
`;

const SecondBody = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px;

  a {
    color: #acacacff;
    padding: 10px 10px 10px 10px;
    font-size: 18px;
    font-family: 'Pkmn', Times, serif;
  }
`;

const ThirdBody = styled.div`
  width: 100%;
  display: flex;
  float: right;
  justify-content: flex-end;
  padding: 70px 20px 0 0;

  p {
    color: white;
    padding: 10px 10px 10px 10px;
    font-size: 15px;
    font-family: 'Pkmn', Times, serif;
  }
`;

export default function Footer() {
  return (
    <Container>
      <FirstBody>
        <a>Hello</a>
        <a>Hello</a>
      </FirstBody>
      <SecondBody>
        <a>Hello</a>
        <a>Hello</a>
      </SecondBody>
      <ThirdBody>
        <p>Pokemon is of ©The Pokemon Company</p>
      </ThirdBody>
    </Container>
  );
}
