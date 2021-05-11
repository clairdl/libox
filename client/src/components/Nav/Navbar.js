import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Anchor, Header } from 'grommet';

import NavbarSearch from './NavbarSearch';

const Navbar = () => (
  <Header background="brand" justify="left">
    <Nav direction="row" pad="medium" align="center">
      <Anchor as={Link} to="/" label="home" />
      <Anchor as={Link} to="/watchlist" label="watchlist" />
    </Nav>
    <NavbarSearch />
  </Header>
);

export default Navbar;

// export default class Navbar extends React.Component {
//   render() {
//     return (
//       <Header background="brand" justify="left">
//         <Nav direction="row" pad="medium" align="center">
//           <Anchor as={Link} to="/" label="home" />
//           <Anchor as={Link} to="/watchlist" label="watchlist" />
//         </Nav>
//         <NavbarSearch />
//       </Header>
//     );
//   }
// }
