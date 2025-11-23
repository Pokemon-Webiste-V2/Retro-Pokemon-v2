/* eslint-disable no-unused-expressions */
import React from "react";
import styled from "styled-components";
import TimelineCard from "../TimelineCard/TimelineCard";
import gamesData from "../../data/games.json";
import {urls} from "../../assets/images/games/index-games";


const Container = styled.div`
margin: 2% 0 2% 0;
height: 100%;
width: 4px;
background-color: white;
border-radius:40px;

li {
    position:relative;
    color: white;

    &::marker{
        font-size:50px;
        position:absolute;
    }

    &:hover {
        color: #c7a008;
    }

    &:nth-child(odd){
        float:left;
        padding-right: calc(50% + 30px);
        left: -7px;
    }

    &:nth-child(even){
        float:right;
        padding-left: calc(50% + 30px);
        text-align: right;
        direction: rtl;
        left: 7px;
    }

}
`;

for (let i = 0; i < Object.keys(urls).length; i++) {
    gamesData.games[i].image = [i];
}

const Timeline = () => {
    const TimelineComponent = gamesData?.games?.map((game: any, index: number) => {
        return (
            <>
               <li key={`game-list`}><TimelineCard key={`game-${index}`} name={game.title} year={game.releaseY} src={game?.image} label={game.title} /></li>
            </>
        )
    })

    return (    
      <Container>        
            {TimelineComponent}        
      </Container>    
    );
  }
  
  export default Timeline;