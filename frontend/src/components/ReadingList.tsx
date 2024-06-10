import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Button, Typography } from '@mui/material';

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

interface ReadingListProps {
  books: Book[];
  onRemove: (title: string, author: string) => void;
}

const ReadingList: React.FC<ReadingListProps> = ({ books, onRemove }) => {
  return (
    <List sx={{ marginTop: '20px' }}>
      <Typography variant="h6" sx={{ padding: '10px', bold: '700' }}>
        Reading List
      </Typography>
      {books.length === 0 ? (
        <Typography variant="body1" sx={{ padding: '10px', textAlign: 'center' }}>
          No books in reading list
        </Typography>
      ) : (
        books.map((book) => (
          <ListItem key={book.title}>
            <img
              src={book.coverPhotoURL}
              alt={book.title}
              width={60}
              height={60}
              style={{ objectFit: 'cover', height: '100%', marginRight: '10px' }}
            />
            <ListItemText primary={book.title} secondary={book.author} sx={{
              flexWrap: 'wrap',
              maxWidth: 'calc(100% - 120px)',
              fontSize: '16px',
              lineHeight: 1.0,
              fontWeight: 500
            }} />
            <ListItemSecondaryAction>
              <Button variant="contained" color="error" onClick={() => onRemove(book.title, book.author)}>
                Remove
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      )}
    </List>
  );
};

export default ReadingList;

