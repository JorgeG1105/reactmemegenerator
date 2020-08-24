import React,{Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './Components/MainPage';
import Navigation from './Components/Navigation';
import GenerateMeme from './Components/GenerateMeme';
import GenerateChosenMeme from './Components/GenerateChosenMeme';

class App extends Component {
  constructor() {
    super()
    this.state={
      allmemeImgs:[],
      chosenmeme: ''
    }
    this.clickedMeme = this.clickedMeme.bind(this)
  }

  componentDidMount(){
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(res => {
      const {memes} = res.data
      this.setState({ allmemeImgs: memes }) 
    })
  }

  clickedMeme(meme){
    this.setState({
      chosenmeme: meme
    })
  }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path='/' render={() =>(<MainPage />)}></Route>
            <Route exact path='/generatememe' render={(props) =>(<GenerateMeme {...props} allmemeImgs={this.state.allmemeImgs} clickedMeme={this.clickedMeme}/>)}></Route>
            <Route exact path='/generatechosenmeme' render={(props) =>(<GenerateChosenMeme {...props} chosenmeme={this.state.chosenmeme}/>)}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
