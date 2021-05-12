import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
  const [data, setData] = useState({ rows: [] });
  const { search } = useLocation();

  // Every time the search query updates, we fetch again
  useEffect(() => {
    const fetchData = async () => {
      console.log('fetchData invoked');
      const res = await axios.get(`/search${search}`);
      setData({ rows: res.data.results });
    };
    fetchData();
  }, [search]);

  return (
    <ul>
      {data.rows.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default Search;
