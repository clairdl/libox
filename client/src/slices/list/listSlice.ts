import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';
import { MovieIdNum } from '../sharedTypes';
import { InitialState, AddMoviePayload, GetMovieDetailsParams, MovieListItem, RemoveMoviePayload } from './listTypes';

// Thunks
export const addMovieToSpecifiedList = createAsyncThunk(
  'list/addMovieToSpecifiedList',
  async (payload: GetMovieDetailsParams) => {

    const res = await axios.get(
      `/movie/${payload.movieId}`
    );

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

    // Return the movie and intended listId
    return {
      listId: payload.listId,
      movieId,
      movieListItem
    };
  }
);

const initialState: InitialState = {
  status: 'idle',
  userLists: {
    watchlist: {},
    watchedlist: {},
  }
}

// Create slice
export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    removeFromSpecifiedList: (state, action: PayloadAction<RemoveMoviePayload>) => {
      delete state.userLists[action.payload.listId][action.payload.movieId]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addMovieToSpecifiedList.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(addMovieToSpecifiedList.fulfilled, (state, action: PayloadAction<AddMoviePayload>) => {
        state.status = 'idle';
        const { listId, movieId, movieListItem } = action.payload;

        state.userLists[listId][movieId] = movieListItem;
      })
  }
});

// Actions
export const { removeFromSpecifiedList } = listSlice.actions;

// Reducers
export default listSlice.reducer;

// Selectors
export const selectWatchlist = (state: RootState) => state.list.userLists.watchlist;
export const selectWatchedlist = (state: RootState) => state.list.userLists.watchedlist;

export const selectMovieFromWatchlistById = (state: RootState, movieId: number) => {
  return state.list.userLists.watchlist[movieId];
}

export const selectIsMovieInWatchlist = (state: RootState, listId: string, movieId: number): boolean => {
  return state.list.userLists[listId][movieId] === undefined ? false : true
}