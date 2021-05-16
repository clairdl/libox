// libs
import React from 'react';
import { useSelector } from 'react-redux';
// redux
import { selectTotalResults } from '../slices/searchSlice';
// components
import SearchList from '../components/Search/SearchList';
import NoResults from '../components/Search/NoResults';

const Search = () => {
  const totalResults = useSelector(selectTotalResults);

  return <div>{!totalResults ? <NoResults /> : <SearchList />}</div>;
};

export default Search;
