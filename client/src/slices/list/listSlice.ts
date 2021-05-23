/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk, PayloadAction, current } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';
import { InitialState, AddMoviePayload, GetMovieDetailsParams, MovieListItem } from './types';

// Thunks
export const addMovieToWatchlist = createAsyncThunk(
  'list/addMovieToWatchlist',
  async (payload: GetMovieDetailsParams) => {

    const res = await axios.get(
      `/movie/${payload.id}`
    );
    // console.log('from asyncthunk: ', data);

    // Refine from raw response data
    const refined: MovieListItem = {
      id: res.data.id,
      posterPath: res.data.poster_path,
      title: res.data.title,
      releaseDate: res.data.release_date,
      runtime: res.data.runtime,
      revenue: res.data.revenue,
      rating: null
    }

    // Return the movie and intended list
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
    removeFromWatchlist: (state, action: PayloadAction<number>) => {
      console.log('hello?  ', current(state.watchlist), action.payload);
      
      state.watchlist.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addMovieToWatchlist.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(addMovieToWatchlist.fulfilled, (state, action: PayloadAction<AddMoviePayload>) => {
        state.status = 'idle';
        const { listId, movie } = action.payload;

        state[listId].push(movie)
      })
  }
});

// Actions
export const { removeFromWatchlist } = listSlice.actions;

// Reducers
export default listSlice.reducer;

// Selectors
export const selectWatchlist = (state: RootState): MovieListItem[] => state.list.watchlist;
export const selectWatchedlist = (state: RootState): MovieListItem[] => state.list.watchedlist;

export const selectMovieFromWatchlist = (state: RootState, targetId: number): boolean => {
  let hasTarget = false;
  for (let i = 0; i < state.list.watchlist.length; i++) {
    if (state.list.watchlist[i].id === targetId) {
      hasTarget = true;
    }
    break;
  }
  return hasTarget;
}