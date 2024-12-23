// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PlayerView from './PlayerView';
import HostView from './HostView'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player_view" element={<PlayerView />} />
        <Route path="/host_view" element={<HostView />} />
      </Routes>
    </Router>
  );
};

export default App;
