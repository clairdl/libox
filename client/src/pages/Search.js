import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import SearchList from '../components/Search/SearchList';

import NoResults from '../components/Search/NoResults';

const Search = () => {
  const [data, setData] = useState({ rows: [], totalResults: null });
  const { search: query } = useLocation();

  // Every time the search query updates, we fetch again
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/search${query}`);
      setData({
        rows: res.data.results,
        totalResults: res.data.total_results,
      });
    };
    fetchData();
  }, [query]);

  const noResults = data.totalResults === 0;

  return (
    <div>
      {noResults ? (
        <NoResults />
      ) : (
        <SearchList results={data.rows} />
      )}
    </div>
  );
};

export default Search;
