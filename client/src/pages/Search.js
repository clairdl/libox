import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import NoResults from '../components/Search/NoResults';

const Search = () => {
  const [data, setData] = useState({ rows: [], totalResults: null });
  const { search } = useLocation();

  // Every time the search query updates, we fetch again
  useEffect(() => {
    const fetchData = async () => {
      console.log('fetchData invoked');
      const res = await axios.get(`/search${search}`);
      setData({
        rows: res.data.results,
        totalResults: res.data.total_results,
      });
    };
    fetchData();
  }, [search]);

  const listItems = data.rows.map((e) => <li key={e.id}>{e.title}</li>);
  const noResults = data.totalResults === 0 ? <NoResults /> : null;

  return (
    <div>
      {noResults}
      <ul>{listItems}</ul>
    </div>
  );
};

export default Search;
