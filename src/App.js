import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import TrackerPage from './pages/tracker/tracker.component';


const LibraryPage = () => (
  <div>
    <h1>Library Page</h1>
  </div>
);
const GraphPage = () => (
  <div>
    <h1>Graph Page</h1>
  </div>
);


function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/tracker' component={TrackerPage} />
      <Route path='/library' component={LibraryPage} />
      <Route path='/graph' component={GraphPage} />
      </Switch>
    </div>
  );
}

export default App;
