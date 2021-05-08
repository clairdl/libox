import React from 'react';

import { Link } from 'react-router-dom';
import { Menu } from 'antd';

export default class NavMain extends React.Component {
  render() {
    return (
      <Menu theme="dark" mode="horizontal">
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/watchlist">Watchlist</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
