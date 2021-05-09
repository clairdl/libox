import React from 'react';

import NavSearchbar from './NavSearchbar.js';

import { Link } from 'react-router-dom';
import { Menu, Space } from 'antd';

export default class NavMain extends React.Component {
  render() {
    return (
      <Menu theme="light" mode="horizontal">
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/watchlist">Watchlist</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/search">
            <NavSearchbar />
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
