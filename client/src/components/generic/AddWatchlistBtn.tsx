// core libs
import React from 'react';
import { useDispatch } from 'react-redux';

// components
import { Button } from 'grommet';
import { Add } from 'grommet-icons';

// redux
import { getMovieDetails } from '../../slices/list/listSlice';

type AddWatchlistBtnProps = {
  id: number;
};

export const AddWatchlistBtn = (props: AddWatchlistBtnProps) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(getMovieDetails({ listId: 'watchlist', id: props.id }));
  };

  return (
    <Button
      icon={<Add />}
      size='small'
      label='watchlist'
      onClick={onClickHandler}
    />
  );
};

export default AddWatchlistBtn;
