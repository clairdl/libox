import React from 'react';

import NavbarSearch from './NavbarSearch';

import { Link } from 'react-router-dom';

import { Nav, Anchor, Box, Header } from 'grommet';

export default class Navbar extends React.Component {
  render() {
    return (
      <Header background="brand">
        
        <Box>
          <Nav direction="row" pad="medium" align="center">
            <Anchor as={Link} to="/" label="home" />
            <Anchor as={Link} to="/watchlist" label="watchlist" />
          </Nav>
        </Box>

        <Box>
          <NavbarSearch />
        </Box>

      </Header>
    );
  }
}
