import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageHolder from '../../components/ImageHolder/ImageHolder';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import { images } from 'assets/images/general';
import fetcher from '../../backend/fetcher';
import { Link } from 'react-router-dom';

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
  display: flex;
  justify-content: center;
`;

const PokedexBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 50px 5% 0 5%;

  h1 {
    color: white;
  }
`;

let offset = 0;
export default function Pokedex() {
  let [searchparam, setSearchParam] = useState(0);
  let [results, setResults] = useState({} as unknown as any);

  // off set should be an useState so that it resets with
  offset = searchparam * 20;

  let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;

  useEffect(() => {
    const data = fetcher(url);
    data.then((res) => setResults(res));
  }, [url]);

  return (
    <Body>
      <Title>Retro Pokedex</Title>
      <CenterBody>
        <ImageHolder
          src={images.Heart}
          width={'400px'}
          height={'400px'}
          alt="Pokemon Intro"
        ></ImageHolder>
      </CenterBody>
      {results && (
        <PokedexBody>
          {results?.results?.map((pokemon: any, index: number) => (
            <Link
              to={{
                pathname: '/pokedex/pokemon',
                hash: `${index}`,
                state: {
                  name: pokemon?.name,
                  url: pokemon?.url,
                },
              }}
            >
              <Card
                key={`index-${index}`}
                url={pokemon?.url}
                name={pokemon?.name}
              ></Card>
            </Link>
          ))}
        </PokedexBody>
      )}
      <Pagination init={searchparam} func={setSearchParam} />
    </Body>
  );
}
