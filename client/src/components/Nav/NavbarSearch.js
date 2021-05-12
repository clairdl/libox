import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Search } from 'grommet-icons';
import { Box, TextInput } from 'grommet';

const NavbarSearch = () => {
  const history = useHistory();

  const [query, setQuery] = useState('');
  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  const handleSubmit = ({ code }) => {
    // If enter key is pressed
    if (code === 'Enter') {
      // Update URL route, which renders the Search page
      history.push(`/search?query=${query}`);
    }
  };

  return (
    <Box width="medium" gap="medium">
      <TextInput
        value={query}
        onKeyDown={handleSubmit}
        onChange={handleChange}
        icon={<Search />}
        placeholder="search ..."
      />
    </Box>
  );
};

export default NavbarSearch;
