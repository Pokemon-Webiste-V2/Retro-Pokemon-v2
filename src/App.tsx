//import "./App.css";
import React from 'react';
import Navbar from 'components/NavBar/Navbar';
import MusicCard from 'components/MusicButton/v2/MusicButtonv2';
import RouterComponent from 'pages/router/router';
import Footer from 'components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Navbar />
      <MusicCard />
      <RouterComponent />
      <Footer />
    </Router>
  );
}
