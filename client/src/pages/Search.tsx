// libs
import React from 'react';
import { useSelector } from 'react-redux';
// redux
import { selectStatus, selectTotalResults } from '../slices/search/searchSlice';
// components
import Spinner from '../components/generic/Spinner';
import SearchList from '../components/Search/SearchList';
import NoResults from '../components/generic/NoResults';

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
