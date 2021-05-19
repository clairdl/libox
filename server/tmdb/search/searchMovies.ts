import axios from 'axios';

interface SearchMovieParams {
  query: string | undefined,
  pageNumber?: number
}

export async function searchMovie({ query, pageNumber }: SearchMovieParams) {
  // https://api.themoviedb.org/3/search/movie?api_key=27434d3f221b757fc2e264247b19b91d&query=star%20wars&page=1

  const res = await axios.get(
    `${process.env.TMDB_APIV3_BASEURL}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}&page=${pageNumber}`,
  );

  return res;
}
