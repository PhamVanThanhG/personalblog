import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/personalblog' exact element={<Home/>} />
            <Route path='/about' exact element={<About/>} />
        </Routes>
      </Router>
    </div>
  )
}
