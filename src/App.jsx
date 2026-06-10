import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Programma from './pages/Programma';
import Beoordeling from './pages/Beoordeling';
import Praktisch from './pages/Praktisch';
import Opdrachtgevers from './pages/Opdrachtgevers';
import Showcases from './pages/Showcases';
import Team from './pages/Team';
import VoorWie from './pages/VoorWie';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voor-wie" element={<VoorWie />} />
          <Route path="/programma" element={<Programma />} />
          <Route path="/beoordeling" element={<Beoordeling />} />
          <Route path="/praktisch" element={<Praktisch />} />
          <Route path="/opdrachtgevers" element={<Opdrachtgevers />} />
          <Route path="/showcases" element={<Showcases />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
