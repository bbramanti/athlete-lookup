import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from "./components/Home";
import AthleteProfile from "./components/AthleteProfile";
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/athleteprofile" exact component={AthleteProfile} />
        </Switch>
      </BrowserRouter>

  );
}

export default App;
