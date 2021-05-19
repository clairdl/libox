import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/search/searchSlice';
import listReducer from './slices/list/listSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    list: listReducer
  },
});

// export default store;


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
