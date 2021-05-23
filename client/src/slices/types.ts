// Shared
export type MovieId = number;
export type MovieRating = number;


// LIST SLICE
export interface MovieListItem {
  posterPath: string | null
  title: string
  releaseDate: string
  runtime: number | null
  revenue: number
  rating: number | null
}

export interface InitialStateList {
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
  watchlist: MovieListItem[],
  watchedlist: MovieListItem[],
}

export interface GetMovieDetailsParams {
  listId: 'watchlist' | 'watchedlist',
  id: number
}

export interface AddMoviePayload {
  listId: 'watchlist' | 'watchedlist',
  movie: MovieListItem
}


// RATING SLICE
export interface InitialStateRating {
  idToRatingMap: Record<MovieId, MovieRating>
}

export interface CreateOrUpdateRatingPayload {
  id: number
  rating: number
}




// export interface MovieDetails {
//   id: number
//   title: string
//   tagline: string | null
//   releaseDate: string
//   overview: string | null
//   runtime: number | null
//   backdropPath: string | null
//   posterPath: string | null
//   budget: number
//   revenue: number
//   userRating: number | null
//   belongsToLists: string[] | null
// }
