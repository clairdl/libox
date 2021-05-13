import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import SearchListItem from '../components/Search/SearchListItem';
import NoResults from '../components/Search/NoResults';

const Search = () => {
  const [data, setData] = useState({ rows: [], totalResults: null });
  const { search } = useLocation();

  // Every time the search query updates, we fetch again
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/search${search}`);
      setData({
        rows: res.data.results,
        totalResults: res.data.total_results,
      });
    };
    fetchData();
  }, [search]);

  const noResults = data.totalResults === 0;
  
  const listItems = data.rows.map((el) => (
    <SearchListItem
      title={el.title}
      date={el.release_date}
      desc={el.overview}
      poster={el.poster_path}
    />
  ));

  return (
    <div>
      <ul>{noResults ? <NoResults /> : listItems}</ul>
    </div>
  );
};

export default Search;
