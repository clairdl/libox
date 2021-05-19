/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FormDown } from 'grommet-icons';

import { Box, List, DropButton, Text } from 'grommet';

type RatingBtnProps = {
  rating: null | number;
};

const options = ['remove', 1, 2, 3, 4, 5];
const RatingBtn = (props: RatingBtnProps) => {
  const [rating, setRating] = useState(props.rating);
  const [open, setOpen] = useState(false);

  const onClickHandler = (e: any) => {
    e.item === 'remove' ? setRating(null) : setRating(e.item);
    setOpen(false);
  };

  return (
    <Box>
      <DropButton
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        dropContent={
          <List data={options} border={false} onClickItem={onClickHandler} />
        }
      >
        <Box direction='row' gap='medium' align='center' pad='small'>
          <Text>{rating === null ? '-' : `${rating}/5`}</Text>
          <FormDown color='brand' />
        </Box>
      </DropButton>
    </Box>
  );
};

export default RatingBtn;
