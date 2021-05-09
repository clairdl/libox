import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import { Layout } from 'antd';
import NavMain from './components/Nav/NavMain.js';

import Home from './pages/Home.js';
import Search from './pages/Search.js';
import Watchlist from './pages/Watchlist.js';

const { Header, Content } = Layout;

export default function App() {
  return (
    <Router>
      <div>
        <Layout>
          {/* <Header> */}
            <NavMain />
          {/* </Header> */}
          <Content>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/watchlist">
                <Watchlist />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </div>
    </Router>
  );
}
