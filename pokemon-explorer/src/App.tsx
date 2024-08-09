import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import PokemonDetailPage from './pages/PokemonDetailPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <div style={{ textAlign: 'center', padding: '10px 0px 0px 0px' }}>
          <img src="/assets/pokemon_logo.gif" alt="Pokemon Logo" />
        </div>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
