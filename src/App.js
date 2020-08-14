import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './Components/Navigation';
import GenerateMeme from './Components/GenerateMeme';
import GenerateChosenMeme from './Components/GenerateChosenMeme';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path='/generatememe' component={GenerateMeme} />
          <Route path='/generatechosenmeme' component={GenerateChosenMeme}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
