import { icons } from 'assets/icons';
import '../../assets/fonts/font-Pkmn.css';
import '../MusicPlayer/MusicPlayer.css';
import { music } from 'assets/music';
import React, { useEffect, useState } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicCounter, setMusicCounter] = useState(0);
  const [currentMusicName, setCurrentMusicName] = useState(music[0].title);
  const [currentMusic, setCurrentMusic] = useState(new Audio(music[0].src));

  const playMusic = () => {
    currentMusic.play();
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    currentMusic.pause();
    setIsPlaying(false);
  };

  const nextMusic = () => {
    pauseMusic();
    if (musicCounter + 1 >= music.length) {
      setMusicCounter(0);
      setCurrentMusicName(music[0].title);
      setCurrentMusic(new Audio(music[0].src));
    } else {
      let counter = musicCounter + 1;
      setMusicCounter(counter);
      setCurrentMusicName(music[counter].title);
      setCurrentMusic(new Audio(music[counter].src));
    }
  };

  useEffect(() => {
    // Auto play music on component load - Google Chrome requires user interaction to play audio - We must add a delay or a modal
    setTimeout(() => {
      playMusic();
    }, 1000);
  }, []);

  return (
    <div className="music-player-container">
      <div className="music-player-controls">
        {isPlaying ? (
          <button className="music-button" onClick={() => pauseMusic()}>
            <img className="speaker-icon" alt="speaker" src={icons.MuteIcon} />
          </button>
        ) : (
          <button className="music-button" onClick={() => playMusic()}>
            <img
              className="speaker-icon"
              alt="speaker"
              src={icons.SpeakerIcon}
            />
          </button>
        )}
        <button className="music-button" onClick={() => nextMusic()}>
          <img
            className="speaker-icon"
            alt="speaker"
            src={icons.FastForwardIcon}
          />
        </button>
      </div>
      <div className="music-player-info">
        <span className="span-content">Playing</span>
        <span className="span-content-music">{currentMusicName}</span>
      </div>
    </div>
  );
}
