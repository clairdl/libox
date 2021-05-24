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
  grommet,
} from 'grommet';
import { Add, Checkmark, Subtract, Trash } from 'grommet-icons';
import { deepMerge } from 'grommet/utils';

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

const removeTheme: ThemeType = deepMerge(grommet, {
  global: {
    colors: {
      active: 'status-error',
    },
  },
  button: {
    default: {},
    secondary: {
      background: { color: 'status-ok' },
      border: { color: 'brand', width: '2px' },
      color: 'text',
    },
    hover: {
      background: { color: 'active' },
      secondary: {
        border: { color: 'active' },
      },
    },
  },
});

const AddWatchlistBtn = ({ id }: AddWatchlistBtnProps) => {
  // init
  const dispatch = useAppDispatch();

  const [isHover, setIsHover] = useState(false);

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

  return (
    <>
      {watchlistHasMovie ? (
        <ThemeContext.Extend value={removeTheme}>
          <Button
            secondary
            icon={isHover ? <Trash /> : <Checkmark />}
            size='small'
            label='watchlist'
            onClick={handleRemoveFromWatchlist}
            onMouseEnter={() => {
              setIsHover(true);
            }}
            onMouseLeave={() => {
              setIsHover(false);
            }}
          />
        </ThemeContext.Extend>
      ) : (
        <Button
          icon={<Add />}
          size='small'
          label='watchlist'
          onClick={handleAddToWatchlist}
        />
      )}
    </>
  );
};

export default AddWatchlistBtn;
