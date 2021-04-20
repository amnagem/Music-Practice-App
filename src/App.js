import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const TrackerPage = () => (
  <div>
    <h1>Tracker Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/tracker' component={TrackerPage} />
      </Switch>
    </div>
  );
}

export default App;
