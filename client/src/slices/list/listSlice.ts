/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk, PayloadAction, current } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';
import { MovieIdNum } from '../sharedTypes';
import { InitialState, AddMoviePayload, GetMovieDetailsParams, MovieListItem } from './listTypes';

// Thunks
export const addMovieToWatchlist = createAsyncThunk(
  'list/addMovieToWatchlist',
  async (payload: GetMovieDetailsParams) => {

    const res = await axios.get(
      `/movie/${payload.id}`
    );
    // console.log('from asyncthunk: ', data);

    // Refine from raw response data
    const movieListItem: MovieListItem = {
      id: res.data.id,
      posterPath: res.data.poster_path,
      title: res.data.title,
      releaseDate: res.data.release_date,
      runtime: res.data.runtime,
      revenue: res.data.revenue,
      rating: null
    }

    const movieId: MovieIdNum = res.data.id

    // Return the movie and intended list
    return {
      listId: payload.listId,
      movieId,
      movieListItem
    };
  }
);

const initialState: InitialState = {
  watchlist: {},
  watchedlist: {},
  status: 'idle'
}

// Create slice
export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    removeFromWatchlist: (state, action: PayloadAction<number>) => {
      console.log('hello?  ', current(state.watchlist), action.payload);

      delete state.watchlist[action.payload]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addMovieToWatchlist.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(addMovieToWatchlist.fulfilled, (state, action: PayloadAction<AddMoviePayload>) => {
        state.status = 'idle';
        const { listId, movieId, movieListItem } = action.payload;

        state[listId][movieId] = movieListItem;
      })
  }
});

// Actions
export const { removeFromWatchlist } = listSlice.actions;

// Reducers
export default listSlice.reducer;

// Selectors
export const selectWatchlist = (state: RootState) => state.list.watchlist;
export const selectWatchedlist = (state: RootState) => state.list.watchedlist;

export const selectMovieFromWatchlistById = (state: RootState, movieId: number) => {
  return state.list.watchlist[movieId];
}

export const selectIsMovieInWatchlist = (state: RootState, movieId: number): boolean => {
  return state.list.watchlist[movieId] === undefined ? false : true
}