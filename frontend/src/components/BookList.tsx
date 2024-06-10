// BookList.tsx
import React from 'react';
import { Grid } from '@mui/material';
import Book from './Book';

interface BookListProps {
  books: {
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
    title: string;
  }[];
  onAdd: (book: any) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onAdd }) => {
  return (
    <Grid container spacing={3} sx={{ marginTop: '20px' }}>
      {books.map((book) => (
        <Grid item key={book.title} xs={12} sm={6} md={3} lg={3} xl={3}>
          <Book book={book} onAdd={onAdd} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
