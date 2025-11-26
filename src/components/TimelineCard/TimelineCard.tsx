import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 20px;
  margin: 30px;
  border: 5px solid #c7a008ff;
  border-radius: 10px;
  box-shadow: #c7a008ff 10px 7px 20px 0px;
  background-color: black;
  filter: brightness(0.9);

  &:hover {
    transform: scale(1.1);
    transition: all 0.35s ease-in-out;
  }

  div {
    display: flex;
  }

  img {
    height: 200px;
    margin: auto;
    border-radius: 5px;
    width: 100%;
    object-fit: contain;
    transition: all 0.35s ease-in-out;
  }

  img:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }

  p {
    margin: 7px 0 4px 0;
    color: white;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
`;

export default function TimelineCard(props: any) {
  return (
    <Container>
      <div>
        <img src={props.src} alt={props?.label}></img>
      </div>
      <p>{props.name}</p>
      <p>{props.year}</p>
    </Container>
  );
}
