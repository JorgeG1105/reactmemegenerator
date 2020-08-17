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
    console.log(meme)
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
            <Route path='/generatememe' render={(props) =>(<GenerateMeme {...props} allmemeImgs={this.state.allmemeImgs} clickedMeme={this.clickedMeme}/>)}/>
            <Route path='/generatechosenmeme' render={(props) =>(<GenerateChosenMeme {...props} chosenmeme={this.state.chosenmeme}/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
