import React from 'react';
import { useSelector } from 'react-redux';

// components
import { Box } from 'grommet';
import SearchListItem from './SearchListItem';

// redux
import { selectAllMovies } from '../../slices/search/searchSlice';

const SearchList = () => {
  const movies = useSelector(selectAllMovies);

  const listItems = movies.map((el) => (
    <SearchListItem
      key={el.id}
      id={el.id}
      title={el.title}
      date={el.release_date}
      desc={el.overview}
      poster={el.poster_path}
    />
  ));

  return <Box pad={{ horizontal: '15vw', vertical: 'small' }}>{listItems}</Box>;
};

export default SearchList;
