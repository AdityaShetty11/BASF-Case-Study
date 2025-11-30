import { createAsyncThunk } from '@reduxjs/toolkit';
import { Book } from './types';

export const fetchBooks = createAsyncThunk<Book[], string | undefined>(
  'books/fetchBooks',
  async (query?: string) => {
    const queryParam = query || 'subject:fiction';
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(queryParam)}`
    );

    const data = await res.json();

    if (!data.items) return [];

    return data.items.map((item: any) => ({
      id: item.id,
      title: item.volumeInfo.title || 'No title',
      author: (item.volumeInfo.authors && item.volumeInfo.authors[0]) || 'Unknown',
      genre: item.volumeInfo.categories ? item.volumeInfo.categories[0] : 'N/A',
      rating: item.volumeInfo.averageRating || 0
    })) as Book[];
  }
);
