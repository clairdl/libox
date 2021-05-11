import React, { useState } from 'react';

import { Search } from 'grommet-icons';
import { Box, TextInput } from 'grommet';

const NavbarSearch = () => {
  const [query, setQuery] = useState('');

  return (
    <Box width="medium" gap="medium">
      <TextInput
        value={query}
        onChange={({ target }) => {
          setQuery(target.value);
        }}
        icon={<Search />}
        placeholder="search ..."
      />
    </Box>
  );
};

export default NavbarSearch;