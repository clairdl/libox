// core libs
import React from 'react';
import { useDispatch } from 'react-redux';

// components
import { Button } from 'grommet';
import { Add } from 'grommet-icons';

// redux
import { addMovieToWatchlist } from '../../slices/list/listSlice';

type AddSeenBtnProps = {
  id: number;
};

const AddSeenBtn = (props: AddSeenBtnProps) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(addMovieToWatchlist({ listId: 'watchedlist', id: props.id }));
  };
  return (
    <Button
      icon={<Add />}
      size='small'
      label='seen'
      onClick={onClickHandler}
    />
  );
};

export default AddSeenBtn;
