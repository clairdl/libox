import React from 'react';

import { Search } from 'grommet-icons';
import { Box, TextInput } from 'grommet';

const NavSearchbar = () => (
  <Box width="medium" gap="medium">
    <TextInput icon={<Search />} placeholder="search ..." />
  </Box>
);

export default NavSearchbar;