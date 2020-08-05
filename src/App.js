import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home'
import './App.css';
import DiscoverAll from './pages/discover'

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/discover">
          <DiscoverAll />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
