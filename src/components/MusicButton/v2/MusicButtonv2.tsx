import styled from "styled-components";
import { icons } from "assets/icons";
//import '../assets/fonts/font-Pkmn.css';
import { music } from "assets/music";
import React from "react";

const Container = styled.div`
display: flex;
flex-direction: row;
width: 250px;
padding: 10px;
margin: 20px;
border: 5px solid white;
border-radius: 10px;
box-shadow: #c7a008ff 10px 7px 20px 0px;
color: #c7a008ff;
font-family: "Pkmn", Times, serif;
font-size: 14px;
z-index: 1;
float: right;
position: fixed;
bottom: 0;
right: 0;

div && button {
    height: 50px;
    width: 50px;
    cursor: pointer;
    border-radius: 30px;
    margin: 0 0 0 4%;
    background-color:white;
    display:flex;
    transition: all 0.5s;
}

img {
    padding:8px 5px;
}

`;

export default function MusicCard() {
/*     const current = useSelector((state) => state.music.play)
    const name = useSelector((state) => state.music.currentMusic)
    const dispatch = useDispatch() */

    return (    
     <Container>
        <div>
            <button onClick={() => {
                let audio = new Audio(music.IntroBattleMusic); 
                /* if(!current){
                    audio.play();
                    dispatch(play())
                    dispatch(next())
                } else if (current) {
                    audio.pause()
                    dispatch(play())
                } */
            }}>
                <img alt="speaker" width="25px"height="25px" src={icons.SpeakerIcon} />
            </button>
        </div>
        <span>Playing </span>
    </Container>    
    );
  }