import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './Components/Navigation';
import GenerateMeme from './Components/GenerateMeme';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path='/generatememe' component={GenerateMeme} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
