import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import catFactReducer from './reducers/catFactSlice';
import forumReducer from './reducers/forumSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        catfact: catFactReducer,
        forum: forumReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch