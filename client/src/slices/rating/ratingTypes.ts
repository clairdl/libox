import { MovieIdNum, MovieRating } from '../sharedTypes';

export interface InitialState {
  idToRatingMap: Record<MovieIdNum, MovieRating>
}

export interface CreateOrUpdateRatingPayload {
  id: number
  rating: number
}
