import React, { useState } from 'react';
import styled from 'styled-components';
//import '../assets/fonts/font-Pkmn.css';
import postForm from '../../backend/usePost';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 5% 0 0 0;
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
    width: 150%;
    height: 40px;
    font-size: 15px;
    margin: 0 0 2% 0;

    &#checkbox {
      width: 20px;
      height: 20px;
    }
  }
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  width: 150%;
  height: 60px;
  margin: 5% 0 0 0;
  border: 2px solid #c7a008;
  border-radius: 5px;
  padding: 15px;
  font-size: 18px;
  font-family: 'Pkmn', Times, serif;

  &:hover {
    background-color: white;
  }

  &:active {
    background-color: white;
    color: red;
  }
`;

export default function SignUpForm() {
  let error = '';
  const postURL = 'https://pkm-back.herokuapp.com/users';

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    check: false,
  });

  const handleForm = (e: any) => {
    switch (e.target.id) {
      case 'username':
        setFormData((prevState) => ({
          ...prevState,
          username: e.target.value,
        }));
        break;
      case 'password':
        setFormData((prevState) => ({
          ...prevState,
          password: e.target.value,
        }));
        break;
      case 'email':
        setFormData((prevState) => ({ ...prevState, email: e.target.value }));
        break;
      case 'checkbox':
        setFormData((prevState) => ({ ...prevState, check: e.target.checked }));
        break;
      default:
    }
  };

  const SubmitForm = (e: any) => {
    e.preventDefault();
    // my validation is not working and not done
    postForm(postURL, 'POST', formData);
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={(e) => SubmitForm(e)} autoComplete="on">
        <label>Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData?.username}
          onChange={(e) => handleForm(e)}
          autoFocus
          required
        />
        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          pattern=""
          value={formData?.email}
          onChange={(e) => handleForm(e)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData?.password}
          onChange={(e) => handleForm(e)}
          required
        />
        <label>checkbox</label>
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          onChange={(e) => handleForm(e)}
        />
      </LoginForm>
      {error}
      <LoginButton onClick={SubmitForm}>Submit</LoginButton>
    </LoginContainer>
  );
}
