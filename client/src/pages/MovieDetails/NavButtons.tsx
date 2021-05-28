/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Box, Button } from 'grommet';
import { LinkPrevious } from 'grommet-icons';

interface Props {}

const HeaderButtons = (props: Props) => {
  return (
    <Box as='span' >
      <Button secondary alignSelf='start' icon={<LinkPrevious />} />
    </Box>
  );
};

export default HeaderButtons;
