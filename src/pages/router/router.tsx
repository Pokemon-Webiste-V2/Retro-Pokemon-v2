import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import Pokedex from '../pokedex/pokedex';
import Login from '../login/login';
import Games from '../games/games';
import AboutMe from '../about-me/about-me';
import Signup from '../signup/signup';
import Pokemon from '../pokemon/pokemon';

export default function RouterComponent() {
  return (
    <Switch>
      <Route sensitive={false} path="/" exact component={Home} />
      <Route sensitive={false} path="/pokedex" exact component={Pokedex} />
      <Route sensitive={false} path="/login" exact component={Login} />
      <Route sensitive={false} path="/games" exact component={Games} />
      <Route sensitive={false} path="/about-me" exact component={AboutMe} />
      <Route sensitive={false} path="/signup" exact component={Signup} />
      <Route
        sensitive={false}
        path="/pokedex/pokemon"
        exact
        component={Pokemon}
      />
    </Switch>
  );
}
