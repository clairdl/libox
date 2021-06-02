// core libs
import { useState } from 'react';

// components
import {
  Button,
  ThemeType,
  ThemeContext,
  grommet,
} from 'grommet';
import { Add, Checkmark, Trash } from 'grommet-icons';
import { deepMerge } from 'grommet/utils';

// redux
import {
  addMovieToSpecifiedList,
  selectIsMovieInWatchlist,
  removeFromSpecifiedList,
} from '../slices/list/listSlice';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';

const removeButtonTheme: ThemeType = deepMerge(grommet, {
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

interface Props {
  listId: string;
  movieId: number;
}

const AddToListButton = ({ listId, movieId }: Props) => {
  // init
  const dispatch = useAppDispatch();

  // for button styling
  const [isHover, setIsHover] = useState(false);

  // if watchlistHasMovie is TRUE:
  // the `remove` button will render
  // else, the `add` button will render
  const [listHasMovie, setWatchlistHasMovie] = useState(
    useAppSelector((state) => {
      return selectIsMovieInWatchlist(state, listId, movieId);
    })
  );

  const handleAddToWatchlist = () => {
    dispatch(addMovieToSpecifiedList({ listId, movieId }));
    setWatchlistHasMovie(!listHasMovie);
  };

  const handleRemoveFromList = () => {
    dispatch(removeFromSpecifiedList({ listId, movieId }));
    setWatchlistHasMovie(!listHasMovie);
  };

  return (
    <>
      {listHasMovie ? (
        <ThemeContext.Extend value={removeButtonTheme}>
          {/* REMOVE BUTTON */}
          <Button
            secondary
            icon={isHover ? <Trash /> : <Checkmark />}
            size='small'
            //
            label={`${listId}`}
            onClick={handleRemoveFromList}
            onMouseEnter={() => {
              setIsHover(true);
            }}
            onMouseLeave={() => {
              setIsHover(false);
            }}
          />
        </ThemeContext.Extend>
      ) : (
        // ADD BUTTON
        <Button
          icon={<Add />}
          size='small'
          //
          label={`${listId}`}
          onClick={handleAddToWatchlist}
        />
      )}
    </>
  );
};

export default AddToListButton;
