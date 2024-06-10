// Book.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

interface BookProps {
  book: {
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
    title: string;
  };
  onAdd: (book: any) => void;
}

const Book: React.FC<BookProps> = ({ book, onAdd }) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia component="img" height="150" width="150" image={book.coverPhotoURL} alt={book.title} />
      <CardContent>
        <Typography variant="h6" sx={{ fontSize: '16px', lineHeight: 1.2, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{book.title}</Typography>
        <Typography variant="subtitle1" sx={{ fontSize: '13px', lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{book.author}</Typography>
      </CardContent>
      <Grid container justifyContent="center" sx={{ padding: '10px' }}>
        <Button size="small" variant="contained" color="primary" onClick={() => onAdd(book)}>
          Add to Reading List
        </Button>
      </Grid>
    </Card>
  );
};

export default Book;
