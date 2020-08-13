import React, {Component} from 'react';
import './Stylesheets/GenerateMeme.css';
import SuccessKid from '../MemeTemplates/successkid.jpg';
import WhatIfIToldYou from '../MemeTemplates/whatifitoldyou.jpg';
import YuNo from '../MemeTemplates/yuno.jpg';
import Skep3rdWorldKid from '../MemeTemplates/skeptical3rdworldkid.jpg';
import PhiloRator from '../MemeTemplates/philosoraptor.jpg';
import KermitTea from '../MemeTemplates/kermittea.jpg'
import {Link} from 'react-router-dom';

class GenerateMeme extends Component {
    render(){
        return(
            <div className='GenerateMeme__Container'>
                <div className='GenerateMeme__MemeTemplateContainer'>
                    <div className='GenerateMeme__MemeCard'>
                        <div className='MemeCard__Image'>
                            <img src={SuccessKid} alt='Success Kid'/>
                    </div>
                        <p>Success Kid</p>
                    </div>
                    <div className='GenerateMeme__MemeCard'>
                        <div className='MemeCard__Image'>
                            <img src={WhatIfIToldYou} alt='What if I told you..'/>
                        </div>
                        <p>What if I told you...</p>
                    </div>
                    <div className='GenerateMeme__MemeCard'>
                        <div className='MemeCard__Image'>
                            <img src={YuNo} alt='Y U NO?!'/>
                        </div>
                        <p>WHY U NO</p>
                    </div>
                    <div className='GenerateMeme__MemeCard'>
                        <div className='MemeCard__Image'>
                            <img src={Skep3rdWorldKid} alt='Skeptical 3rd world kid.'/>
                        </div>
                        <p>Skeptical Third World Kid</p>
                    </div>
                    <div className='GenerateMeme__MemeCard'>
                        <div className='MemeCard__Image'>
                            <img src={PhiloRator} alt='Philosoraptor'/>
                        </div>
                        <p>Philosoraptor</p>
                    </div>
                    <div className='GenerateMeme__MemeCard'>
                        <div className='MemeCard__Image'>
                            <img src={KermitTea} alt='Kermit sipping tea'/>
                        </div>
                        <p>Kermit Sipping Tea</p>
                    </div>
                </div>
                <div className='GenerateMeme__UploadMemeContainer'>
                    <h2>Or..create your own!</h2>
                    
                </div>
            </div>
        )
    }
}

export default GenerateMeme