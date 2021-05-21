// Initial state
// type MovieId = number;
// type MovieRating = number;

// export interface InitialState {
//   ratings: Record<MovieId, MovieRating>
// }

export interface InitialState {
  ratings: {
    [key: string]: number,
  }[]
}

// Action object payloads
export interface CreateOrUpdateRatingPayload {
  id: number
  rating: number
}

export interface DeleteRatingPayload {
  id: number
}