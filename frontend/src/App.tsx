import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { Container, Typography, Box } from '@mui/material';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BOOKS, { client });
  const [searchTerm, setSearchTerm] = useState('');
  const [readingList, setReadingList] = useState<Book[]>([]);

  const addToReadingList = (book: Book) => {
    setReadingList((prevList) => [...prevList, book]);
  };

  const removeFromReadingList = (title: string) => {
    setReadingList((prevList) => prevList.filter((book) => book.title !== title));
  };

  const filteredBooks = data?.books.filter((book: Book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Ello Book Assignment
      </Typography>
      <SearchBar onSearch={setSearchTerm} />
      <Box display="flex" justifyContent="space-between">
        <BookList books={filteredBooks} onAdd={addToReadingList} />
        <ReadingList books={readingList} onRemove={removeFromReadingList} />
      </Box>
    </Container>
  );
};

export default App;
