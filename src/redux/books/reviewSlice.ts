import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookReview {
  rating: number;
  review: string;
}

interface BookReviewsState {
  [bookId: string]: BookReview;
}

const initialState: BookReviewsState = {};

export const reviewSlice = createSlice({
  name: 'bookReviews',
  initialState,
  reducers: {
    setRating: (
      state, 
      action: PayloadAction<{ bookId: string; rating: number }>
    ) => {
      const { bookId, rating } = action.payload;
      if (!state[bookId]) state[bookId] = { rating, review: '' };
      else state[bookId].rating = rating;
    },
    setReview: (
      state, 
      action: PayloadAction<{ bookId: string; review: string }>
    ) => {
      const { bookId, review } = action.payload;
      if (!state[bookId]) state[bookId] = { rating: 0, review };
      else state[bookId].review = review;
    },
  }
});

export const { setRating, setReview } = reviewSlice.actions;
export default reviewSlice.reducer;
