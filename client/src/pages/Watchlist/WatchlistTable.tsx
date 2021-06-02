/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Box, DataTable } from 'grommet';

import { columns } from './tableConfig';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectWatchlist } from '../../slices/list/listSlice';
import { MovieListItem } from '../../slices/list/listTypes';

// const SortableIcon = () => (
//   <Blank color='text-xweak' opacity='0.3'>
//     <g fill='none' stroke='#000' strokeWidth='2'>
//       <path d='M 6 10 L 12 6 L 18 10' />
//       <path d='M 6 14 L 12 18 L 18 14' />
//     </g>
//   </Blank>
// );

const WatchlistTable = () => {
  const history = useHistory();

  const tableData = Object.values(useAppSelector(selectWatchlist));

  const onClickHandle = (e: any) => {
    // console.log(e.datum.id);

    history.push(`/movie/${e.datum.id}`);
  };

  return (
    <Box align='start' pad='large'>
      <DataTable
        primaryKey={false}
        columns={columns}
        data={tableData}
        step={10}
        onClickRow={onClickHandle}
      />
    </Box>
  );
};

export default WatchlistTable;
