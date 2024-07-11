import React from 'react';
import Navbar from './Navbar';
import './App.css';
import CounterFunction from './CounterFunction';

function App() {
  return (
    <div >
      <CounterFunction />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

    </div>
  );
}

export default App;
