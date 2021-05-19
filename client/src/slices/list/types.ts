export interface ListMovie {
  id: number,
  poster: null | string,
  title: string,
  releaseDate: string,
  rating: null | number,
  runtime: number,
}

export interface InitialState {
  watchlist: Array<ListMovie>,
  watchedlist: Array<ListMovie>,
}

export interface AddMoviePayload {
  listId: string,
  movie: ListMovie
}