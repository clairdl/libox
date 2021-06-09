import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Nav, Anchor, Header } from 'grommet';

import NavbarSearch from './NavbarSearch';
import LoginBtn from '../LoginBtn';
import SignupBtn from '../SignupBtn';

const Navbar = () => (
  <Header background='brand' pad={{ left: 'medium', vertical: 'xsmall' }}>
    <Nav direction='row' align='center'>
      <Anchor as={Link} to='/' label='home' />
      <Anchor as={Link} to='/watchlist' label='watchlist' />
      <NavbarSearch />

      <Box direction='row' align='center' gap='small'>
        <LoginBtn />
        <SignupBtn />
      </Box>
    </Nav>
  </Header>
);

export default Navbar;
