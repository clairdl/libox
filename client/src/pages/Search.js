// libs
import React from 'react';
import { useSelector } from 'react-redux';
// redux
import { selectStatus, selectTotalResults } from '../slices/searchSlice';
// components
import Spinner from '../components/Search/Spinner';
import SearchList from '../components/Search/SearchList';
import NoResults from '../components/Search/NoResults';

const Search = () => {
  const totalResults = useSelector(selectTotalResults);
  const status = useSelector(selectStatus);

  const noResults = !totalResults;

  // prettier-ignore
  return (
    <div>{
      status === 'pending'
        ? <Spinner />
        : noResults
        ? <NoResults />
        : <SearchList />
     }</div>
  );
};

export default Search;
