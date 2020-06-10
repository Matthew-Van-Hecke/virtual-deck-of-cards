import React from 'react';
import Card from './Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card suit="hearts" number={3} />
    </div>
  );
}

export default App;
