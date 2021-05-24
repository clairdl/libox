/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
// core libs
import React, { useState } from 'react';

// components
import {
  Button,
  Box,
  Text,
  ThemeType,
  ButtonType,
  ButtonProps,
  ThemeContext,
} from 'grommet';
import { Add, Trash } from 'grommet-icons';

// redux
import {
  addMovieToWatchlist,
  selectIsMovieInWatchlist,
  removeFromWatchlist,
} from '../../slices/list/listSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

type AddWatchlistBtnProps = {
  id: number;
};

const addTheme: ThemeType = {
  button: {
    color: 'accent-1',
  },
};

const removeTheme: ThemeType = {
  button: {
    color: 'accent-2',
  },
};

export const AddWatchlistBtn = ({ id }: AddWatchlistBtnProps) => {
  // init
  const dispatch = useAppDispatch();
  // const watchlistHasMovie = useAppSelector((state) => {
  //   return selectIsMovieInWatchlist(state, id);
  // });

  const [watchlistHasMovie, setWatchlistHasMovie] = useState(
    useAppSelector((state) => {
      return selectIsMovieInWatchlist(state, id);
    })
  );

  const handleAddToWatchlist = () => {
    dispatch(addMovieToWatchlist({ listId: 'watchlist', id: id }));
    setWatchlistHasMovie(!watchlistHasMovie);
  };

  const handleRemoveFromWatchlist = () => {
    dispatch(removeFromWatchlist(id));
    setWatchlistHasMovie(!watchlistHasMovie);
  };
  console.log(watchlistHasMovie);

  return (
    <>
      {watchlistHasMovie ? (
        <ThemeContext.Extend value={removeTheme}>
          <Button
            icon={<Trash />}
            size='small'
            label='watchlist'
            onClick={handleRemoveFromWatchlist}
          />
        </ThemeContext.Extend>
      ) : (
        <ThemeContext.Extend value={addTheme}>
          <Button
            icon={<Add />}
            size='small'
            label='watchlist'
            onClick={handleAddToWatchlist}
          />
        </ThemeContext.Extend>
      )}
    </>
  );
};

export default AddWatchlistBtn;
