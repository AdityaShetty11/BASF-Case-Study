import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Book } from './types';

export const fetchBooks = createAsyncThunk<Book[], string | undefined>(
  'books/fetchBooks',
  async (query?: string) => {
    const queryParam = query || 'subject:fiction';

    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: { q: queryParam }
    });

    const data: any = response.data;

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
