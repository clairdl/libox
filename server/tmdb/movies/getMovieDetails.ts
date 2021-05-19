import axios from 'axios';

interface GetMovieDetailsParams {
  id: number;
}

export async function getMovieDetails({ id }: GetMovieDetailsParams) {
  // https://api.themoviedb.org/3/movie/11?api_key=27434d3f221b757fc2e264247b19b91d

  const res = await axios.get(
    `${process.env.TMDB_APIV3_BASEURL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`,
  );

  return res;
}