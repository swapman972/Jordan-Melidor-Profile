import React from 'react';

export default class Navbar extends React.Component{

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    {/* logo */}
                    <a className="navbar-brand" href="/profile">
                        <img className='logoPic' src={'/img/profpic.jpg'} alt="logo"/>
                    </a>
                    
                    {/* Links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/swimming">Swimming</a>
                        </li>
                        <li className="nav-item">
                            <a id='contactLink' className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }

}