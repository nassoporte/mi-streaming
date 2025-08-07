import React from 'react';
import './App.css';
import Header from './components/Header.tsx';
import Content from './components/Content.tsx';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Content />
    </div>
  );
}


export default App;