import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@mui/material';

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

interface BookListProps {
  books: Book[];
  onAdd: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onAdd }) => {
  return (
    <List>
      {books.map((book) => (
        <ListItem key={book.title}>
          <img src={book.coverPhotoURL} alt={book.title} width={50} height={50} />
          <ListItemText primary={book.title} secondary={book.author} />
          <ListItemSecondaryAction>
            <Button variant="contained" color="primary" onClick={() => onAdd(book)}>
              Add to Reading List
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;
