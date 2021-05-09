import React from 'react';
import { Space, Input } from 'antd';

const { Search } = Input;

export default class NavSearchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  onChange(value) {
    console.log(value);
  }

  render() {
    return (
      <Space>
        <Search
          placeholder="input search text"
          onChange={this.onChange}
          style={{ width: 200 }}
        />
      </Space>
    );
  }
}
