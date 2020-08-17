import React, {Component} from 'react';
import './Stylesheets/GenerateMeme.css';
import {Link} from 'react-router-dom';

function GenerateMeme(props) {

    const {allmemeImgs} = props
    let displayedMemes = allmemeImgs.slice(0, 9).map(meme =>{
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
            <div className='GenerateMeme__UploadMemeContainer'>
                 <h2>Or..create your own!</h2>
             </div>
        </div>
    )
}

// function GenerateMeme(props) {
//     const {allmemeImgs} = props
//     let displayedMemes = allmemeImgs.slice(0, 9).map(meme =>{
//         return(
//             <Link to='/generatechosenmeme'>
//                 <div className='GenerateMeme__MemeCard'>
//                     <div className='MemeCard__Image'>
//                         <img src={meme.url} alt={meme.name}/>
//                     </div>
//                     <p>{meme.name}</p>
//                 </div>
//             </Link>
//         )
//     })
//     return(
//         <div className='GenerateMeme__Container'>
//             <h1>Choose your meme</h1>
//             <div className='GenerateMeme__MemeTemplateContainer'>
//                 {displayedMemes}
//             </div>
//             <div className='GenerateMeme__UploadMemeContainer'>
//                 <h2>Or..create your own!</h2>
//             </div>
//         </div>
//     )
// }

export default GenerateMeme