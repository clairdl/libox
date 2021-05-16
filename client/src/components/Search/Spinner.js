import React from 'react';

import { Box, Spinner, Text } from 'grommet';

const Simple = () => (
  <Box align='center' direction='row' gap='small' pad='small'>
    <Spinner />
    <Text>searching the jedi archives...</Text>
  </Box>
);

export default Simple;
