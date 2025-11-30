import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import bookReviewsReducer from './books/reviewSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    bookReviews: bookReviewsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
