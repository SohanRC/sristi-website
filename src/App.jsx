import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Events from './Events';
import Members from './Members';
import Registrations from './Registrations';
import Fixtures from './Fixtures';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/members" element={<Members />} />
        <Route path="/registrations" element={<Registrations />} />
        <Route path="/fixtures" element={<Fixtures />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
