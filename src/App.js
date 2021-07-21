import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import GoHome from './components/GoHome/GoHome';

const App = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <NavBar />
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/skills' exact component={Skills} />
          <Route path='/contact' exact component={Contact} />
          <GoHome />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
