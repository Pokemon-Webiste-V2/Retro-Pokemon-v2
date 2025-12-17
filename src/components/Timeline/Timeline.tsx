import React from 'react';
import './Timeline.css';
import TimelineCard from '../TimelineCard/TimelineCard';
import { Game } from '../../types/interface';
import useTimeline from 'backend/hooks/useTimeline';

const Timeline = () => {
  const games = useTimeline();

  return (
    <div className="timeline-body">
      {games.map((game: Game, index: number) => (
        <>
          <li className='timeline-bullet-point'>
              <TimelineCard
              title={game.title}
              info={game.info}
              gen={game.gen}
              image={game.image}
              releaseY={game.releaseY}
              key={`game-list-${index}`}
            />
          </li>
        </>
      ))}
    </div>
  );
};

export default Timeline;
