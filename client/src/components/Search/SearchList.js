/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import SearchListItem from './SearchListItem';

const SearchList = ({ results }) => {
  const listItems = results.map((el) => (
    <SearchListItem
      title={el.title}
      date={el.release_date}
      desc={el.overview}
      poster={el.poster_path}
    />
  ));

  return (
    <Box pad={{ horizontal: '15vw', vertical: 'small' }}>{listItems}</Box>
  );
};

SearchList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.object.isRequired,
};

export default SearchList;
