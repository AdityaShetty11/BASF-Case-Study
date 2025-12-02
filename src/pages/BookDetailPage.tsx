import React from 'react';
import { Box, Typography, Paper, TextField, Rating, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setRating, setReview } from '../redux/books/reviewSlice';

const BookDetailContainer = styled.div`
display: flex;
justify-content: space-between
`
const BookDescription = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const BookImage = styled.div`
display: flex
`;

const BookDetailPage: React.FC = () => {
  const { id = '' } = useParams<{ id: string }>();
  const book = useAppSelector((state) => state.books.books.find(b => b.id === id));
  const review = useAppSelector((state) => state.bookReviews[id] || { rating: 0, review: '' });
  const dispatch = useAppDispatch();

  if (!book) return <Typography variant="h5">Book not found.</Typography>;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Paper sx={{ p: 4, minWidth: 420 }}>
        <BookDetailContainer>
          <BookDescription>
        <Typography variant="h4" gutterBottom>{book.title}</Typography>
        <Typography variant="subtitle1" gutterBottom>by {book.author}</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>Genre: {book.genre}</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>Avg. Rating: {book.rating ?? 'N/A'}</Typography>
        </BookDescription>
        <BookImage>
          <img src={book.imageLinks}/>
        </BookImage>
        </BookDetailContainer>
        <Stack direction="row" alignItems="center" spacing={2} mt={3} mb={1}>
          <Typography>Your Rating:</Typography>
          <Rating
            value={review.rating}
            precision={1}
            max={5}
            onChange={(_e, val) => {
              dispatch(setRating({ bookId: id, rating: val ?? 0 }));
            }}
          />
        </Stack>
        <TextField
          label="Your Review"
          multiline
          rows={4}
          value={review.review}
          onChange={e => dispatch(setReview({ bookId: id, review: e.target.value }))}
          fullWidth
        />
      </Paper>
    </Box>
  );
};

export default BookDetailPage;
