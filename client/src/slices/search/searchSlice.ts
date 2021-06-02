import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';

// Thunks
export const searchMovies = createAsyncThunk(
  'search/searchMovies',
  async (payload, store: any) => {
    const res = await axios.get(
      `/search?query=${store.getState().search.query}`
    );
    return res.data;
  }
);

interface InitialState {
  query: string;
  status: string;
  movies: { [key: string]: any }[];
  totalResults: number | null
}

const initialState: InitialState = {
  query: '',
  status: 'idle',
  movies: [],
  totalResults: null,
};

// Create slice
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.status = 'idle';
        state.movies = action.payload.results;
        state.totalResults = action.payload.total_results;
      });
  },
});

// Actions
export const { updateQuery } = searchSlice.actions;

// Reducers
export default searchSlice.reducer;

// Selectors
export const selectQuery = (state: RootState) => state.search.query;
export const selectStatus = (state: RootState) => state.search.status;
export const selectAllMovies = (state: RootState) => state.search.movies;
export const selectTotalResults = (state: RootState) => state.search.totalResults;