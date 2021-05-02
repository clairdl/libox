import React from 'react';

import logo from '../assets/hal.svg';
import { Link } from 'react-router-dom';
import { Menu, Image } from 'antd';

export default class NavMain extends React.Component {
  render() {
    return (
      <Menu theme="dark" mode="horizontal">
        <Menu.Item>
          <Link to="/">
            <Image preview={false} width={20} src={logo} alt="hal" />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/watchlist">Watchlist</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
