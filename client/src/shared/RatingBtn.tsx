import { useState } from 'react';
import { FormDown } from 'grommet-icons';

import { Box, List, DropButton, Text } from 'grommet';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import {
  createOrUpdateRating,
  deleteRating,
  selectRatingById,
} from '../slices/rating/ratingSlice';

interface Props {
  id: number;
}

const options = ['remove', 1, 2, 3, 4, 5];

const RatingBtn = ({ id }: Props) => {
  const dispatch = useAppDispatch();

  const [rating, setRating] = useState(
    useAppSelector((state) => {
      return selectRatingById(state, id);
    })
  );

  const [open, setOpen] = useState(false);

  const onClickHandler = (e: any) => {
    if (e.item === 'remove') {
      dispatch(deleteRating(id));
      setRating(null);
    } else {
      dispatch(createOrUpdateRating({ id, rating: e.item }));
      setRating(e.item);
    }

    setOpen(false);
  };

  return (
    <DropButton
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      dropContent={
        <List data={options} border={false} onClickItem={onClickHandler} />
      }
    >
      <Box direction='row' gap='medium' align='center' pad='small'>
        <Text>{rating === null ? '-/5' : `${rating}/5`}</Text>
        <FormDown color='brand' />
      </Box>
    </DropButton>
  );
};

export default RatingBtn;
