// libs
import { useSelector } from 'react-redux';
// redux
import {
  selectStatus,
  selectTotalResults,
} from '../../slices/search/searchSlice';
// components
import Spinner from '../../shared/Spinner';
import SearchList from './SearchList';
import NoResults from '../../shared/NoResults';

const Search = () => {
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
