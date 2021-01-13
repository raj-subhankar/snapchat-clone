import React from 'react';
import { Router, Switch } from 'react-router-dom';
import './App.css';
import Preview from './Preview';
import WebcamCapture from './WebcamCapture';

function App() {
  return (
    <div className="app">

      <Router>
        <div className='app__body'>
          <Switch>
          <Route exact path='/preview'>
              <Preview />
            </Route>

            <Route exact path='/'>
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>

      <WebcamCapture />
    </div>
  );
}

export default App;
