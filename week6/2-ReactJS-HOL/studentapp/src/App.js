import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <h1>Student Management Portal</h1>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
