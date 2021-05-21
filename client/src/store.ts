import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/search/searchSlice';
import listReducer from './slices/list/listSlice';
import ratingReducer from './slices/rating/ratingSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    list: listReducer,
    rating: ratingReducer
  },
});

// export default store;


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
