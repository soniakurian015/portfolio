// App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Updated import
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
