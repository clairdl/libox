import axios from 'axios';

interface GetMovieCreditsParams {
  id: number;
}

export async function getMovieCredits({ id }: GetMovieCreditsParams) {

  const res = await axios.get(
    `${process.env.TMDB_APIV3_BASEURL}/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`,
  );

  return res;
}