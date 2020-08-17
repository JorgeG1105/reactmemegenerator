import React, {Component} from 'react';
import './Stylesheets/GenerateChosenMeme.css';

function GenerateChosenMeme(props){
    return(
        <div className='GenerateChosenMeme__Container'>
            <h1>Here is your chosen meme!</h1>
            <img src={props.chosenmeme.url}/>
        </div>
    )
}


export default GenerateChosenMeme