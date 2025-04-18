import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import designIdeas from './components/pages/design-ideas';
import jsApps from './components/pages/js-apps';
import contact from './components/pages/contact';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/design-ideas' Component={designIdeas} />
        <Route path='/js-apps' Component={jsApps} />
        <Route path='/contact' Component={contact} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
