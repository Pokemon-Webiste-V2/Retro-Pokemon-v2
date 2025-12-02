//import "./App.css";
import React from 'react';
import Navbar from 'components/NavBar/Navbar';
import MusicPlayer from 'components/MusicPlayer/MusicPlayer';
import RouterComponent from 'pages/router/router';
import Footer from 'components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Navbar />
      <RouterComponent />
      <MusicPlayer />
      <Footer />
    </Router>
  );
}
