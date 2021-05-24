// import { MovieIdStr, MovieIdNum } from '../sharedTypes';

export interface MovieListItem {
  id: number
  posterPath: string | null
  title: string
  releaseDate: string
  runtime: number | null
  revenue: number
  rating: number | null
}

export interface InitialState {
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected'
  watchlist: {[key: string]: MovieListItem}
  watchedlist: {[key: string]: MovieListItem}
}

export interface GetMovieDetailsParams {
  listId: 'watchlist' | 'watchedlist'
  id: number
}

export interface AddMoviePayload {
  listId: 'watchlist' | 'watchedlist'
  movieId: number
  movieListItem: MovieListItem
}