import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@mui/material';

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

interface ReadingListProps {
  books: Book[];
  onRemove: (title: string) => void;
}

const ReadingList: React.FC<ReadingListProps> = ({ books, onRemove }) => {
  return (
    <List>
      {books.map((book) => (
        <ListItem key={book.title}>
          <img src={book.coverPhotoURL} alt={book.title} width={50} height={50} />
          <ListItemText primary={book.title} secondary={book.author} />
          <ListItemSecondaryAction>
            <Button variant="contained" color="secondary" onClick={() => onRemove(book.title)}>
              Remove
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ReadingList;
