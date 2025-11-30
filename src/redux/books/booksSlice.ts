import { createSlice } from '@reduxjs/toolkit';
import { BooksState } from './types';
import { fetchBooks } from './booksThunks';

const initialState: BooksState = {
  books: [],
  loading: false,
  error: null
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch books';
      });
  }
});

export default booksSlice.reducer;
