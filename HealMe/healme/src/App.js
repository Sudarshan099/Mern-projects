import React from 'react';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
      <section id="home">
        <h1>Home</h1>
        <p>Welcome to our website.</p>
      </section>
      <section id="about">
        <h1>About</h1>
        <p>About us section.</p>
      </section>
      <section id="services">
        <h1>Services</h1>
        <p>Our services.</p>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <p>Contact us section.</p>
      </section>
      </div>
     
    </div>
  );
}

export default App;
