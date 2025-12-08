import React from 'react';
import { Game } from '../../types/interface';
import './TimelineCard.css';

export default function TimelineCard({ title, image, info, releaseY }: Game) {
  return (
    <div className="timeline-card">
      <div id="timeline-card-image">
        <img src={image} alt={title}></img>
      </div>
      <p id="timeline-card-title">{title}</p>
      <p id="timeline-card-release-year">{releaseY}</p>
      {/* <p>{props.description}</p> */}
    </div>
  );
}
