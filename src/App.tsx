
//import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/home/home";
import Pokedex from "./pages/pokedex/pokedex";
import Login from "./pages/login/login";
import Games from "./pages/games/games";
import AboutMe from "./pages/aboutMe/about-me";
import Signup from "./pages/signup/signup";
import Pokemon from "./pages/pokemon/pokemon";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route sensitive={false} path="/Retro-Pkm" exact component={Home} />
        <Route sensitive={false} path="/pokedex" exact component={Pokedex} />
        <Route sensitive={false} path="/login" exact component={Login} />
        <Route sensitive={false} path="/games" exact component={Games} />
        <Route sensitive={false} path="/about-me" exact component={AboutMe} />
        <Route sensitive={false} path="/signup" exact component={Signup} />
        <Route sensitive={false} path="/pokedex/pokemon" exact component={Pokemon} />
      </Switch>
    </Router>
  );
}