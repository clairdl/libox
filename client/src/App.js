import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Grommet } from 'grommet';
import Navbar from './shared/Nav/Navbar';
import { Watchlist, Watchedlist } from './pages/Watchlist/index';
import Search from './pages/Search/index';
import MovieDetails from './pages/MovieDetails/MovieDetails';

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
          <Route path='/watchlist'>
            <Watchlist />
          </Route>
          <Route path='/watchedlist'>
            <Watchedlist />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
}
