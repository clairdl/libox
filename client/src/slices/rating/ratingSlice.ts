import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { CreateOrUpdateRatingPayload, InitialState } from './types';

const initialState = {} as InitialState

// export interface InitialState {
//   ratings: Record<MovieId, MovieRating>
// }

export const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    createOrUpdateRating: (state, action: PayloadAction<CreateOrUpdateRatingPayload>): void => {
      const { id, rating } = action.payload;

      if (state.ratings[id] !== undefined) {
        state.ratings[id] = rating
      } else {
        Object.assign(state.ratings, { [id]: rating })
      }
    },
  }

})

// Reducer
export default ratingSlice.reducer;

// Selectors
export const selectRatingById = (state: RootState, id: number) => state.rating[id];