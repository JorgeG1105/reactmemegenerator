import React from 'react'
import MainMeme from '../mainPageMeme.png'
import willywonka from '../willywonka.jpg'
import './Stylesheets/MainPage.css'

function MainPage(props){
    return(
        <div>
            <img  className='MainImgMeme' src={MainMeme}/>
            <div className='MainPage__MemeCardContainer'>
                <div className='MainPage__ImageContainer'>
                    <img className='MainPage__img' src={willywonka}/>
                </div>
                <div className='MainPage__ImageContainer'>
                    <img className='MainPage__img' src={willywonka}/>
                </div>
                <div className='MainPage__ImageContainer'>
                    <img className='MainPage__img' src={willywonka}/>
                </div>
                <div className='MainPage__ImageContainer'>
                    <img className='MainPage__img' src={willywonka}/>
                </div>
                <div className='MainPage__ImageContainer'>
                    <img className='MainPage__img' src={willywonka}/>
                </div>
                <div className='MainPage__ImageContainer'>
                    <img className='MainPage__img' src={willywonka}/>
                </div>
            </div>
        </div>
    )
}

export default MainPage