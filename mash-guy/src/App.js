import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import { Page } from './globalStyledComponents';

function App() {
  return (
    <Router>
      <Page>
        <Home />
        <Routes></Routes>
      </Page>
    </Router>
  );
}

export default App;
