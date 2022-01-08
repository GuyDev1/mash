import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import { Page } from './global/globalStyledComponents';
import Setup from './setup/Setup';
import Game from './game/Game';
import { GAME_PAGE, SETUP_PAGE } from './global/globalConstants';

function App() {
  return (
    <Router>
      <Page>
        <Routes>
          <Route path={SETUP_PAGE} element={<Setup />} />
          <Route path={GAME_PAGE} element={<Game />} />
          <Route path={'/'} element={<Home />} />
        </Routes>
      </Page>
    </Router>
  );
}

export default App;
