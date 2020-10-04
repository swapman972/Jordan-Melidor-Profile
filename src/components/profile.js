import React from 'react'
import { Redirect } from 'react-router-dom';

export default class profile extends React.Component{

    state = {
        redirectToSwimming: false,
        redirectToProjects: false,
        redirectToContact: false
    }

    redirectFunction = () => {
        if(this.state.redirectToSwimming){
            return <Redirect to='/swimming'/>
        }else if(this.state.redirectToProjects){
            return <Redirect to='/project'/>
        }else if(this.state.redirectToContact){
            return <Redirect to='/contact'/>
        }
    }

    redirectHandler = (e) =>{
        if(e.target.className === 'projectPic'){
            this.setState({
                redirectToProjects: true
            })
        }else if(e.target.className === 'swimmingPic'){
            this.setState({
                redirectToSwimming: true
            })
        }else if(e.target.className === 'mailPic'){
            this.setState({
                redirectToContact: true
            })
        }
    }

    render(){
        return(
            <div>
                {this.redirectFunction()}
                <img className='background' src={'/img/Background.jpg'} alt="background"/>
                <div className='block1title'> @ About me @</div>
                <div className='block1'> 
                    I recently graduated from Queens College with a degree in French and minor in Computer science, 
                    I entered Flatiron School to pursue my software engineering passion and career choice. 
                    The more I am learning about computer science the more I enjoy it. 
                    My second passion is sports, especially swimming. 
                    Today, I am proud to say that I reached a national level of swimming through my career. 
                    I also had to occasion to work with the US Air Force 
                    which taught me how to perform under stress in a leadership position, 
                    work efficiently as a group but also that growth is often met when you get out of your comfort zone. 
                    So now I am looking to extend my knowledge by persuing a career within the software engineering field. 
                </div>
                <div className='block2title'> @ Past, Present, Future @</div>
                
                <div className='projectDiv'>
                    <div className='projectText'> Check Out my past projects! </div>
                    <img onClick={this.redirectHandler} className='projectPic' src={'/img/projectPic.png'} alt="projectPic"/>
                </div>

                <div className='swimmingDiv'>
                    <div className='swimmingText'> Check my Swim world! </div>
                    <img onClick={this.redirectHandler} className='swimmingPic' src={'/img/swimmingFly.png'} alt="swimmingPic"/>
                </div>
            
                <div className='mailDiv'>
                    <div className='mailText'> Contact me here! </div>
                    <img onClick={this.redirectHandler} className='mailPic' src={'/img/mailPict.png'} alt="mailPic"/>
                </div>

            </div>
        )
    }
}