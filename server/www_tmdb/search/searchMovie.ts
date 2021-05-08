// const axios = require('axios');
import axios from 'axios';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

interface SearchMovieParams {
  query: string,
  pageNumber: number
}

module.exports = {
  searchMovie: async ({ query, pageNumber }: SearchMovieParams) => {
    // https://api.themoviedb.org/3/search/movie?api_key=27434d3f221b757fc2e264247b19b91d&query=star%20wars&page=1

    // let options = {
    //   method: 'get',
    //   url: `${TMDB_BASE_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}&page=${pageNumber}`
    // };

    const res = await axios.get(
      `${TMDB_BASE_URL}/search/movie?
        api_key=${process.env.TMDB_API_KEY}
        &query=${query}
        &page=${pageNumber}`,
    );
    console.log(res);
  },
};
