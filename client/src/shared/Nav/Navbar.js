import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Anchor, Header } from 'grommet';

import NavbarSearch from './NavbarSearch';
import LoginBtn from '../LoginBtn';
import SignupBtn from '../SignupBtn';

const Navbar = () => (
  <Header background='brand' pad={{ left: 'medium', vertical: 'xsmall' }}>
    <Nav direction='row' align='center'>
      <Anchor as={Link} to='/' label='home' />
      <Anchor as={Link} to='/watchlist' label='watchlist' />
      <NavbarSearch />

      <LoginBtn />
      <SignupBtn />
    </Nav>
  </Header>
);

export default Navbar;
