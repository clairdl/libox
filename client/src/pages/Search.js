import React from 'react';

export default class Search extends React.Compoent {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }
  
  // Layout here
  render() {
    return (
      <div>
        <h1>Watchlist</h1>
      </div>
    );
  }
}
