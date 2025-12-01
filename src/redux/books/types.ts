export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
  imageLinks: string;
}

export interface BooksState {
  books: Book[];
  loading: boolean;
  error: string | null;
}
