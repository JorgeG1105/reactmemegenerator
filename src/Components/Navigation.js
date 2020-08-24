import React from 'react'
import './Stylesheets/Navigation.css'
import pepeLogo from '../pepeLogo.png'
import {Link} from 'react-router-dom'

function Navigation(){
     return(
        <div className='navigation__Container'>
            <div className='navigation__LogoSection'>
                <Link to='/'>
                    <img className='navigation__Logo' src={pepeLogo} alt='Pepe the frog'/>
                    <h4>React Meme Generator</h4>
                </Link>
            </div>
            <div className='navigation__SearchSection'>
                <input type='text' placeholder='Search Memes..' />
            </div>
            <div className='navigation__ButtonsSection'>
                <Link to='/generatememe'><span role='img' aria-label='pencil'>✏️ </span>Generate</Link>
                <a href='#'><span role='img' aria-label='star'>⭐ </span>Top Memes</a>
            </div>
        </div>
    )
}

export default Navigation