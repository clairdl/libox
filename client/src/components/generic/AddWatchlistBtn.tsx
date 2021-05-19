import React from 'react';
import { Button } from 'grommet';
import { Add } from 'grommet-icons';

type AddWatchlistBtnProps = {
  id: number;
};
export const AddWatchlistBtn = (props: AddWatchlistBtnProps) => {
  
  // const onClickHandler = () => {};

  return (
    <Button icon={<Add />} size='small' label='watchlist' onClick={() => {}} />
  );
};

export default AddWatchlistBtn;
