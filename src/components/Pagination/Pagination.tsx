import React from 'react';
import styled from 'styled-components';
//import '../assets/fonts/font-Pkmn.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5% 0 0 0%;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  li {
    list-style: none;
  }

  span {
    padding: 0 5px 0 5px;
  }

  button {
    padding: 12px 16px;
    margin: 0;
    border: 2px solid #c7a008ff;
    font-size: 18px;
    font-family: 'Pkmn', Times, serif;
    background-color: black;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #c7a008ff;
  }

  button:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

type PaginationProps = {
  init?: number;
  func: (page: number) => void;
};

export default function Pagination({ init = 0, func }: PaginationProps) {
  const counter = Math.max(0, init);

  function NextPage(value: number) {
    if (value >= 0) {
      func(value);
    }
  }

  return (
    <Container>
      <ul>
        <li>
          <button aria-label="Previous" onClick={() => NextPage(counter - 1)}>
            <span>&laquo;</span>Previous
          </button>
        </li>

        <li>
          <button aria-label="Page" onClick={() => NextPage(counter)}>
            {counter + 1}
          </button>
        </li>
        <li>
          <button aria-label="Page" onClick={() => NextPage(counter + 1)}>
            {counter + 2}
          </button>
        </li>
        <li>
          <button aria-label="Page" onClick={() => NextPage(counter + 2)}>
            {counter + 3}
          </button>
        </li>

        <li>
          <button aria-label="Next" onClick={() => NextPage(counter + 1)}>
            Next <span>&raquo;</span>
          </button>
        </li>
      </ul>
    </Container>
  );
}
