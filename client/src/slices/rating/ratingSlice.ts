import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { InitialState, CreateOrUpdateRatingPayload } from './ratingTypes';
import { MovieIdNum, MovieRating } from '../sharedTypes';

const initialState: InitialState = {
  idToRatingMap: {}
}

export const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    createOrUpdateRating: (state, action: PayloadAction<CreateOrUpdateRatingPayload>): void => {
      const { id, rating } = action.payload;

      state.idToRatingMap[id] = rating
    },
    deleteRating: (state, action: PayloadAction<number>): void => {
      delete state.idToRatingMap[action.payload];
    }
  }
});

// Actions
export const { createOrUpdateRating } = ratingSlice.actions;
export const { deleteRating } = ratingSlice.actions;

// Reducer
export default ratingSlice.reducer;

// Selectors
export const selectEntireRatingMap = (state: RootState): Record<MovieIdNum, MovieRating> | undefined => state.rating.idToRatingMap


export const selectRatingById = (state: RootState, id: number): number | null => {
  return state.rating.idToRatingMap[id] || null;
}