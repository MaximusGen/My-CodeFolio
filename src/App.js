import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Mentions from './Pages/Mentions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mentions-legales" element={<Mentions />} />
    </Routes>
  );
}

export default App;
