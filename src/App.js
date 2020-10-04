import React from 'react';
import './App.css';
import welcome from './components/welcome'
import profile from './components/profile'
import Navbar from './components/Navbar'
import project from './components/project'
import swimming from './components/swimming'
import contact from './components/contact'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css'

function App() {
  return (
    <Router>
      <Route component={Navbar} exact path={["/profile", "/swimming", "/project", "/contact"]}/>
      <Route exact path="/" component={welcome}/>
      <Route exact path="/profile" component={profile}/>
      <Route exact path="/project" component={project}/>
      <Route exact path="/swimming" component={swimming}/>
      <Route exact path="/contact" component={contact}/>
    </Router>
  );
}

export default App;
