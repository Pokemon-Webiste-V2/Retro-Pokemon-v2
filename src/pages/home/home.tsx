import React from 'react';
import TextHolder from '../../components/TextHolder/TextHolder';
import { images } from 'assets/images/general';
import '../home/home.css';

const paragraphText =
  `This project was born from a love of classic Game Boy adventures and the charm of their simple,
   pixel-driven worlds, inspiring the idea to reimagine that nostalgia as an online Pokémon-style arcade experience. What began as a small experiment quickly grew into a full creative challenge, blending retro aesthetics with modern multiplayer systems to see how old-school design could meet contemporary web technology. Along the way, it became a personal sandbox for sharpening software-development skills—from game logic and animation to networking, UI design, and scalable architecture—while staying true to the warm, familiar feel of vintage handheld games. The result is both a tribute to childhood favorites and a
   practical journey in learning, adapting, and expanding technical abilities through a project built with curiosity and passion.`;

export default function Home() {
  return (
    <div className='homepage-body'>
      <div className='first-body'>
        <div>
          <h1 className='title'>Welcome to Retro Pokemon</h1>
        </div>
        <div className='image-holder'>
           <img
          src={images.IntroBattle}
          alt="Pokemon Intro"
          width="400px"
          height="368px"
        />
        </div>
        <div>
          <h3 className='subtitle'>Step into a retro-styled Pokémon battleground where classic
            arcade vibes meet real-time online battles. Challenge players worldwide and prove you’re the ultimate trainer.</h3>
        </div>
      </div>
      <div className='second-body'>
        <TextHolder title="Introducing the Idea" paragraph={paragraphText} />
        <img
          src={images.GameBoy}
          alt="Gameboy"
          width="290px"
          height="500px"
        />
      </div>
    </div>
  );
}
