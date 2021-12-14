import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as pages from './pages';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ pages.Login } />
      <Route path="/main" component={ pages.Main } />
      <Route path="/mentor" component={ pages.MentorSchedule } />
      <Route path="/student" component={ pages.StudentSchedule } />
      <Route path="/tips" component={ pages.Tips } />
      <Route path="/userConfig" component={ pages.UserConfig } />
      <Route path="/register" component={ pages.Register } />
    </Switch>
  );
}

export default App;
