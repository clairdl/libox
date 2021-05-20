export interface ListMovie {
  id: number,
  poster: null | string,
  title: string,
  releaseDate: string,
  runtime: number,
}

export interface InitialState {
  watchlist: Array<ListMovie>,
  watchedlist: Array<ListMovie>,
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected'
}

export interface GetMovieDetailsParams {
  listId: 'watchlist' | 'watchedlist',
  id: number
}

export interface AddMoviePayload {
  listId: 'watchlist' | 'watchedlist',
  movie: ListMovie
}