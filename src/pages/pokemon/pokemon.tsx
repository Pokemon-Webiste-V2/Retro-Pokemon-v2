import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/NavBar/Navbar';
import { useLocation } from 'react-router-dom';
import fetcher from '../../backend/fetcher';

const Body = styled.div`
  height: 100%;
  background-color: black;
  padding: 30px 0 0 0;
`;

const CentralBody = styled.div`
  height: 100%;
  background-color: black;
`;

const Image = styled.div`
  height: 700px;
  width: 50%;
  background-color: black;
  border: 3px solid yellow;
`;

const Details = styled.div`
  height: 700px;
  width: 50%;
  background-color: black;
  border: 3px solid yellow;
`;

export default function Pokemon() {
  const location = useLocation<{ url?: string }>();

  useEffect(() => {
    const data = fetcher(location?.state?.url || '');
    data.then((res: any) => console.log(res));
  }, [location]);

  return (
    <Body>
      <Navbar></Navbar>
      <CentralBody>
        <Image></Image>
        <Details>
          <h1>{}</h1>
        </Details>
      </CentralBody>
    </Body>
  );
}
