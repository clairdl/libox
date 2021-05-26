import { useState } from 'react';
import { FormDown } from 'grommet-icons';

import { Box, List, DropButton, Text } from 'grommet';
import { useAppDispatch } from '../../hooks';
import {
  createOrUpdateRating,
  deleteRating,
} from '../../slices/rating/ratingSlice';

interface Props {
  id: number;
  rating?: number | null | undefined;
};

const options = ['remove', 1, 2, 3, 4, 5];

const RatingBtn = ({ id, rating }: Props) => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const onClickHandler = (e: any) => {
    e.item === 'remove'
      ? dispatch(deleteRating(id))
      : dispatch(createOrUpdateRating({ id, rating: e.item }));

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
