import React, { useState } from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <TextField
      label="Search Books"
      variant="outlined"
      value={searchTerm}
      onChange={handleSearch}
      fullWidth
    />
  );
};

export default SearchBar;
