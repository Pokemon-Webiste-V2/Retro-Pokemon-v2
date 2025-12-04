import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  background-color: black;
  height: 100vh;
  padding: 30px 0 0 0;
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: #c7a008;
  font-size: 40px;
  font-family: 'Pkmn', Times, serif;
`;
const CenterBody = styled.div`
  display: flex;
  justify-content: center;
`;

export default function AboutMe() {
  return (
    <Body>
      <Title>About Me Page</Title>
      <CenterBody></CenterBody>
    </Body>
  );
}
