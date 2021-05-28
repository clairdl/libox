// import { MovieIdStr, MovieIdNum } from '../sharedTypes';

export interface MovieListItem {
  id: number
  posterPath: string | null
  title: string
  releaseDate: string
  runtime: number | null
  revenue: number
  rating?: number | null
} 

// state.list.userLists.watchlist
export interface InitialState {
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected'
  userLists: {
    watchlist: { [key: string]: MovieListItem }
    watchedlist: { [key: string]: MovieListItem }
    [key: string]: { [key: string]: MovieListItem }
  }
}

export interface GetMovieDetailsParams {
  listId: string
  movieId: number
}

export interface AddMoviePayload {
  listId: string
  movieId: number
  movieListItem: MovieListItem
}

export interface RemoveMoviePayload {
  listId: string
  movieId: number
}