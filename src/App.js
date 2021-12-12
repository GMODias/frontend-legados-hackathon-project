import React from 'react';
import { Switch, Route } from 'react-router';
import * as pages from './pages';
import './App.css';

function App() {
  return (
    <>
    <Switch>
      <Route exat path='/' component={pages.StudentSchedule} />
    </Switch>
    </>  
  );
}

export default App;
