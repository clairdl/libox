import React, { useState, useEffect } from 'react';

import { Box, DataTable } from 'grommet';

import { columns } from './tableConfig';
import { useAppSelector } from '../../hooks';
import { selectWatchlist } from '../../slices/list/listSlice';
import { selectEntireRatingMap } from '../../slices/rating/ratingSlice';
import { MovieListItem } from '../../slices/list/types';

// const SortableIcon = () => (
//   <Blank color='text-xweak' opacity='0.3'>
//     <g fill='none' stroke='#000' strokeWidth='2'>
//       <path d='M 6 10 L 12 6 L 18 10' />
//       <path d='M 6 14 L 12 18 L 18 14' />
//     </g>
//   </Blank>
// );

const WatchlistTable = () => {
  // Select user's watchlist and ratings from Redux
  const watchlist = useAppSelector(selectWatchlist);
  const ratingMap = useAppSelector(selectEntireRatingMap);

  // Initialize typesafe tableData state
  const [tableData, setTableData] = useState<MovieListItem[]>();

  // const [sort, setSort] = useState({
  //   property: 'name',
  //   direction: 'desc',
  // });

  useEffect(() => {
    setTableData(() => {
      const res = watchlist.map((el: MovieListItem) => {
        // IF the rating map is empty, or doesn't contain a rating for the movie
        return ratingMap === undefined || ratingMap[el.id] === undefined
          ? // return the rating as null
            { ...el, rating: null }
          : // else, return the movie's rating
            { ...el, rating: ratingMap[el.id] };
      });

      return res.reverse();
    });
  }, [watchlist, ratingMap]);

  const onClickHandle = (e: any) => {
    // console.log(e);
  };

  return (
    <Box align='start' pad='large'>
      <DataTable
        primaryKey={false}
        columns={columns}
        data={tableData}
        step={10}
        // sort={sort}
        onClickRow={onClickHandle}
      />
    </Box>
  );
};

export default WatchlistTable;
