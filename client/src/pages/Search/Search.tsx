import { useEffect } from 'react';
// libs
import { useSelector, useDispatch } from 'react-redux';
// redux
import {
  selectStatus,
  searchMovies,
  selectTotalResults,
  updateQuery,
} from '../../slices/search/searchSlice';
// components
import Spinner from '../../shared/Spinner';
import SearchList from './SearchList';
import NoResults from '../../shared/NoResults';

const Search = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const params: URLSearchParams = new URLSearchParams(window.location.search);
    const queryValue = params.get("query");
    console.log("Search useEffect")
    if (queryValue !== null) {
      dispatch(updateQuery(queryValue));
      dispatch(searchMovies());
    }
  }, []);

  const totalResults = useSelector(selectTotalResults);
  const status = useSelector(selectStatus);

  const noResults = !totalResults;

  // prettier-ignore
  return (
    <div>{
      status === 'pending'
        ? <Spinner size='medium' label='Scanning the Jedi Archives...' />
        : noResults
        ? <NoResults />
        : <SearchList />
     }</div>
  );
};

export default Search;
