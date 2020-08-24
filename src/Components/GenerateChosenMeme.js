import React, {Component} from 'react';
import './Stylesheets/GenerateChosenMeme.css';
import Draggable from 'react-draggable';

class GenerateChosenMeme extends Component{
    constructor(props){
        super(props)
        this.state={
            toptext:'',
            bottomtext:'',
            alttext1: '',
            alttext2: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className='GenerateChosenMeme__Container'>
                <h1>Here is your chosen meme!</h1>
                <p>*Note - text is draggable.</p>
                <Draggable>
                    <div className='Draggable_container'><h1 className='GenerateChosenMeme__DisplayText'>{this.state.toptext}</h1></div>
                </Draggable>
                <img  className='GenerateChosenMeme__Img'src={this.props.chosenmeme.url}/>
                <Draggable>
                    <div className='Draggable_container'><h1 className='GenerateChosenMeme__DisplayText'>{this.state.bottomtext}</h1></div>
                </Draggable>
                <Draggable>
                    <div className='Draggable_container'><h1 className='GenerateChosenMeme__DisplayText'>{this.state.alttext1}</h1></div>
                </Draggable>
                <Draggable>
                    <div className='Draggable_container'><h1 className='GenerateChosenMeme__DisplayText'>{this.state.alttext2}</h1></div>
                </Draggable>
                <div className='GenerateChosenMeme__inputContainer'>
                    <input className='GenerateChosenMeme__Input' type='text' name='toptext' placeholder='Top Text' value={this.state.toptext} onChange={this.handleChange}/>
                    <input className='GenerateChosenMeme__Input' type='text' name='bottomtext' placeholder='Bottom Text' value={this.state.bottomtext} onChange={this.handleChange}/>
                    <input className='GenerateChosenMeme__Input' type='text' name='alttext1' placeholder='Alt Text 1' value={this.state.alttext1} onChange={this.handleChange}/>
                    <input className='GenerateChosenMeme__Input' type='text' name='alttext2' placeholder='Alt Text 2' value={this.state.alttext2} onChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}

export default GenerateChosenMeme