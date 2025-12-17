import React from 'react';
import Timeline from '../../components/Timeline/Timeline';
import './games.css';

export default function Games() {
  return (
    <div className="games-body">
      <h1 id="games-title">Timetable of the Games</h1>
      <div className="games-main-body">
        <Timeline />
      </div>
    </div>
  );
}
