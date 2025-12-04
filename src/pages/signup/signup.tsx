import React from 'react';
import styled from 'styled-components';
import SignUpForm from '../../components/SignupForm/SignUpForm';
import ImageHolder from '../../components/ImageHolder/ImageHolder';
import { images } from 'assets/images/general';

const Body = styled.div`
  height: 100vh;
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: #c7a008;
  font-size: 40px;
`;
const CenterBody = styled.div`
  display: flex;
`;

const LeftBody = styled.div`
  display: flex;
  justify-content: center;
  margin: 1%;
  border: 4px solid black;
  width: 75%;
  height:;

  @media (max-width: 1368px) {
    width: 0%;
    border: 0;
  }
`;

const RightBody = styled.div`
display: flex;
width 25%;
height:100%;
`;

export default function Signup() {
  return (
    <Body>
      <Title>SignUp</Title>
      <CenterBody>
        <LeftBody>
          <ImageHolder
            src={images.Intro}
            width={'100%'}
            height={'750px'}
            alt="Pokemon Intro"
          ></ImageHolder>
        </LeftBody>
        <RightBody>
          <SignUpForm />
        </RightBody>
      </CenterBody>
    </Body>
  );
}
