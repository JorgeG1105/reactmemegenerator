import React,{Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './Components/Navigation';
import GenerateMeme from './Components/GenerateMeme';
import GenerateChosenMeme from './Components/GenerateChosenMeme';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      allmemeImgs:[]
    }
  }

  componentDidMount(){
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(res => {
      const {memes} = res.data
      this.setState({ allmemeImgs: memes }) 
    })
  }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path='/generatememe' render={(props) =>(<GenerateMeme {...props} allmemeImgs={this.state.allmemeImgs} />)}/>
            <Route path='/generatechosenmeme' component={GenerateChosenMeme}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
