import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import BoxRecords from './BoxRecords';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boxRecords" element={<BoxRecords />} />
      </Routes>
    </Router>
  );
}

export default App;
