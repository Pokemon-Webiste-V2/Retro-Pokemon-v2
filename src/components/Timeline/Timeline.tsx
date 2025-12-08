import React, { useEffect, useState } from 'react';
import './Timeline.css';
import TimelineCard from '../TimelineCard/TimelineCard';
import gamesData from '../../data/games.json';
import { urls } from '../../assets/images/games/index-games';
import { Game } from '../../types/interface';

const Timeline = () => {
  const [games, setGames] = useState(gamesData?.games);

  useEffect(() => {
    for (let i = 0; i < gamesData.games.length; i++) {
      gamesData.games[i].image = urls[i];
    }
    const gamesWithImages = gamesData.games;
    setGames(gamesWithImages);
  }, []);

  return (
    <div className="timeline-body">
      {games.map((game: Game, index: number) => (
        <TimelineCard
          title={game.title}
          info={game.info}
          gen={game.gen}
          image={game.image}
          releaseY={game.releaseY}
          key={`game-list-${index}`}
        />
      ))}
    </div>
  );
};

export default Timeline;
