import React, {Component} from 'react'
import './Stylesheets/Navigation.css'
import pepe from '../pepe.png'

class Navigation extends Component {
    render(){
        return(
            <div className='navigation__Container'>
                <div className='navigation__LogoSection'>
                    <a href='#'>
                        <img className='navigation__Logo' src={pepe} alt='Pepe the frog'/>
                        <h4>React Meme Generator</h4>
                    </a>
                </div>
                <div className='navigation__SearchSection'>
                    <input type='text' placeholder='Search Memes..' />
                </div>
                <div className='navigation__ButtonsSection'>
                    <a href='#'><span role='img' aria-label='pencil'>✏️ </span>Generate</a>
                    <a href='#'><span role='img' aria-label='star'>⭐ </span>Top Memes</a>
                </div>
                <div className='navigation__LoginSection'>
                    <a href='#'>Login</a>
                    <a href='#'>Sign Up</a>
                </div>
            </div>
        )
    }
}

export default Navigation