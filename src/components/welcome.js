import React from 'react'
import { Redirect } from 'react-router-dom';

export default class welcome extends React.Component{

    state = {
        redirectToggle: false
    }

    goToProfile = () => {
        if(this.state.redirectToggle){
            return <Redirect to='/profile'/>
        }
    }

    toggleHandler = () =>{
        this.setState({
            redirectToggle: true
        })
    }

    render(){
        return(
            <div className='welcomePictures'>
                <img className='background' src={'/img/Background.jpg'} alt="background"/>
                {this.goToProfile()}
                <div className='codeDiv'>
                    <p className='passion2'>Now I am also</p>
                    <p className='passion2a'>a passionate </p>
                    <p className='passion2b'>Software developer</p>
                    <img alt='welcomeImg1' className="welcomeImg1" src={'/img/pc-background.jpg'} />
                </div>
                <div className='welcomeSwimDiv'>
                    <p className='name'>Hello, I'm Jordan Melidor-Fuxis</p>
                    <p className='passion1'>I was a passionate Swimmer</p>
                    <img alt='welcomeImg2' className="welcomeImg2" src={'/img/swimming.png'} />
                </div>
                <div className='myPic' onClick={this.toggleHandler}>
                    <p className='click'>Click Me</p>
                    <p className='click1'>For More!</p>
                    <img alt='profPic' className='profPic' src={'/img/profpic.jpg'}/>
                </div>
            </div>
        )
    }
}