import { Grommet, Header } from 'grommet';
import { grommet } from 'grommet/themes';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Nav/Navbar.js';
import Homep from './pages/Home.js';
import Watchlist from './pages/Watchlist.js';
import Search from './pages/Search.js';

const myTheme = {
  anchor: {
    hover: {
      textDecoration: 'none',
    },
  },
};

export default function App() {
  return (
    <Grommet theme={myTheme}>
      <Router>
        
          <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Homep />
          </Route>
          <Route path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
}
