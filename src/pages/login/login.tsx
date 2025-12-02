import React from 'react';
import styled from 'styled-components';
import LoginForm from '../../components/LoginForm/LoginForm';

const Body = styled.div`
  padding: 30px 0 0 0;
  height: 85vh;
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

export default function Login() {
  return (
    <Body>
      <Title>Login</Title>
      <CenterBody>
        <LoginForm />
      </CenterBody>
    </Body>
  );
}
