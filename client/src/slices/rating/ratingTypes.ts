import { MovieIdNum, MovieRating } from '../types';

export interface InitialState {
  idToRatingMap: Record<MovieIdNum, MovieRating>
}

export interface CreateOrUpdateRatingPayload {
  id: number
  rating: number
}
