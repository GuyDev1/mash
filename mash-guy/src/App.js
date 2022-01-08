import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import { Page } from './globalStyledComponents';
import Setup from './setup/Setup';
import Game from './game/Game';

export const SETUP_PAGE = '/setup';
export const GAME_PAGE = '/game';

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
