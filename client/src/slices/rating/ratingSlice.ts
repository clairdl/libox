import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { InitialState, CreateOrUpdateRatingPayload } from './ratingTypes';
import { MovieIdNum, MovieRating } from '../sharedTypes';

const initialState = {} as InitialState

export const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    createOrUpdateRating: (state, action: PayloadAction<CreateOrUpdateRatingPayload>): void => {
      const { id, rating } = action.payload;

      state.idToRatingMap[id] = rating
      // state.idToRatingMap[id] = rating;
      // // Create
      // if (state.idToRatingMap[id] !== undefined) {
      //   state.idToRatingMap[id] = rating
      //   // Update
      // } else {
      //   state.idToRatingMap[id] = rating
      //   // Object.assign(state.idToRatingMap, { [id]: rating })
      // }
    },
    deleteRating: (state, action: PayloadAction<MovieIdNum>): void => {
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
  // if the movie has a rating, return its rating, otherwise return null
  return state.rating.idToRatingMap[id] || null;
}

/*

1. render rating button
  - needs the movie id and the rating (if there is one)




*/