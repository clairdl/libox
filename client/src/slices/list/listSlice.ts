/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';
import { InitialState, AddMoviePayload, GetMovieDetailsParams, ListMovie } from './types';

// Thunks
export const getMovieDetails = createAsyncThunk(
  'search/getMovieDetails',
  async (payload: GetMovieDetailsParams) => {

    const res = await axios.get(
      `/movie/${payload.id}`
    );
    // console.log('from asyncthunk: ', data);

    // Refine from raw response data
    const refined: ListMovie = {
      id: res.data.id,
      poster: res.data.poster_path,
      title: res.data.title,
      releaseDate: res.data.release_date,
      runtime: res.data.runtime
    }

    return {
      listId: payload.listId,
      movie: refined
    };
  }
);

const initialState: InitialState = {
  watchlist: [],
  watchedlist: [],
  status: 'idle'
}

// Create slice
export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    deleteMovie: (state, action) => {
      state.watchlist.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetails.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getMovieDetails.fulfilled, (state, action: PayloadAction<AddMoviePayload>) => {
        state.status = 'idle';
        const { listId, movie } = action.payload;

        state[listId].unshift(movie)
      })
  }
});

// Actions
export const { deleteMovie } = listSlice.actions;

// Reducers
export default listSlice.reducer;

// // Selectors
export const selectWatchlist = (state: RootState) => state.list.watchlist;
export const selectWatchedlist = (state: RootState) => state.list.watchedlist;