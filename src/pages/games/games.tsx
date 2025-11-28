import React from 'react';
import styled from 'styled-components';
import Timeline from '../../components/Timeline/Timeline';

const Body = styled.div`
  background-color: black;
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
  background-color: black;
  display: flex;
  justify-content: center;
`;

export default function Games() {
  return (
    <Body>
      <Title>Timetable of the Games</Title>
      <CenterBody>
        <Timeline />
      </CenterBody>
    </Body>
  );
}
