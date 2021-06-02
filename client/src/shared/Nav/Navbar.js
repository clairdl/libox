import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Anchor, Header } from 'grommet';

import NavbarSearch from './NavbarSearch';

const Navbar = () => (
  <Header background='brand' pad={{left: 'medium', vertical: 'xsmall'}}>
    <Nav direction='row' align='center'>
      <Anchor as={Link} to='/' label='home' />
      <Anchor as={Link} to='/watchlist' label='watchlist' />
      <NavbarSearch />
    </Nav>
  </Header>
);

export default Navbar;
