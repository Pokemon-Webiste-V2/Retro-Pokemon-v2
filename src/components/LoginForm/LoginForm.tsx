import React from 'react';
import styled from 'styled-components';
//import '../assets/fonts/font-Pkmn.css';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  label {
    color: black;
    padding: 10px 10px 10px 10px;
    font-size: 18px;
    font-family: 'Pkmn', Times, serif;
  }

  input {
    border: 2px solid #c7a008;
    border-radius: 5px;
    padding: 15px;
  }
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  margin: 25px 0 0 0;
  border: 2px solid #c7a008;
  border-radius: 5px;
  padding: 15px;
  font-family: 'Pkmn', Times, serif;
`;

export default function Login() {
  return (
    <LoginContainer>
      <LoginForm>
        <label>Username</label>
        <input type="text" id="username" name="username" />
        <label>Password</label>
        <input type="password" id="password" name="password" />
      </LoginForm>
      <LoginButton>Login</LoginButton>
    </LoginContainer>
  );
}
