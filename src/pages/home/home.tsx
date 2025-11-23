import React, {useEffect} from "react";
import styled from "styled-components";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import ImageHolder from "../../components/ImageHolder/ImageHolder";
import TextHolder from "../../components/TextHolder/TextHolder";
import { images } from "assets/images/general";
import GameBoy from "../assets/images/gameboy-color.png";
import MusicCard from "../../components/MusicButton/v2/MusicButtonv2";


const Body = styled.div`
    height: 100%;
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
const FirstBody = styled.div`
    margin: 50px;
    display:flex;
    justify-content:center;
`;

const SecondBody = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    background-color: #ffffffff;
    padding: 2% 0 1% 0;

    img{
        margin: 1%;
    }
`;

const paragraphText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export default function Home() {
return (
    <Body>
        <Navbar>
        </Navbar>
        <MusicCard />
        <Title>Welcome to Retro Pokemon</Title>
        <FirstBody>
        <ImageHolder src={images.IntroBattle} alt="Pokemon Intro" width="400px" height="368px"></ImageHolder>
    </FirstBody>
    <SecondBody>
        <TextHolder title="Introducing the Idea" paragraph={paragraphText}/>
        <ImageHolder src={images.GameBoy} alt="Gameboy" width="290px" height="500px"></ImageHolder>
    </SecondBody>
    <Footer />
    </Body>
);
}