import React from "react";
import styled from "styled-components";
import Navbar from "../../components/NavBar/Navbar";

const Body = styled.div`
    background-color: black;
    padding: 30px 0 0 0;
`;
const Title= styled.h1`
    display:flex;
    justify-content:center;
    color: #c7a008;
    font-size: 40px;
    font-family: "Pkmn", Times, serif;
`;
const CenterBody = styled.div`
    display:flex;
    justify-content:center;
`;

export default function AboutMe() {     
return (
    <Body>
        <Navbar />
        <Title>About Me Page</Title>
        <CenterBody>
        </CenterBody>
    </Body>
);
}