import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Chats from './Chats';
import ChatView from './ChatView';
import Preview from './Preview';
import WebcamCapture from './WebcamCapture';

function App() {
  return (
    <div className="app">

      <Router>
        <div className='app__body'>
          <Switch>

          <Route path="/chats/view">
              <ChatView />
            </Route>

            <Route path="/chats">
              <Chats />
            </Route>

            <Route path="/preview">
              <Preview />
            </Route>

            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
