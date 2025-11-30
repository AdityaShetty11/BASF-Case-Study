import React, { useEffect, useState, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchBooks } from '../redux/books/booksThunks';
import { TextField, Box, Pagination, Typography } from '@mui/material';
import BooksTable from './BooksTable';

const ITEMS_PER_PAGE = 5;

const BookList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { books, loading } = useAppSelector((state) => state.books);

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  // Fetch initial data
  useEffect(() => {
    dispatch(fetchBooks('subject:fiction'));
  }, [dispatch]);

  // Filtering (title OR author)
  const filteredBooks = useMemo(() => {
    const lower = search.toLowerCase();
    return books.filter(
      (b) =>
        b.title.toLowerCase().includes(lower) ||
        b.author.toLowerCase().includes(lower)
    );
  }, [books, search]);

  // Pagination
  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);

  const pagedBooks = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredBooks.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredBooks, page]);

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Books
      </Typography>

      {/* Search Bar */}
      <TextField
        label="Search by Title or Author"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {/* Table */}
      <BooksTable books={pagedBooks} loading={loading} />

      {/* Pagination */}
      {filteredBooks.length > ITEMS_PER_PAGE && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
        />
      )}
    </Box>
  );
};

export default BookList;
