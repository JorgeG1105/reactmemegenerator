import React from 'react';
import './Stylesheets/GenerateMeme.css';
import {Link} from 'react-router-dom';

function GenerateMeme(props) {

    const {allmemeImgs} = props
    let displayedMemes = allmemeImgs.map(meme =>{
        return(
            <Link to='/generatechosenmeme' onClick={() =>{props.clickedMeme(meme)}} key={meme.id}>
                <div className='GenerateMeme__MemeCard'>
                    <div className='MemeCard__Image'>
                        <img src={meme.url} alt={meme.name}/>
                    </div>
                    <p>{meme.name}</p>
                </div>
            </Link>
        )
    })
    return(
        <div className='GenerateMeme__Container'>
            <h1>Choose your meme</h1>
             <div className='GenerateMeme__MemeTemplateContainer'>
                {displayedMemes}
            </div>
        </div>
    )
}

export default GenerateMeme