import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Grommet } from 'grommet';
import Navbar from './components/Nav/Navbar';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Search from './pages/Search';
import MovieDetails from './pages/MovieDetails/index'

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
          <Route path='/movie/:id' children={<MovieDetails />} />
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/watchlist'>
            <Watchlist />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
}
