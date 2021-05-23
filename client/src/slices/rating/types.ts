// Initial state
export type MovieId = number;
export type MovieRating = number;

export interface InitialState {
  idToRatingMap: Record<MovieId, MovieRating>
}

// Action object payloads
export interface CreateOrUpdateRatingPayload {
  id: number
  rating: number
}

