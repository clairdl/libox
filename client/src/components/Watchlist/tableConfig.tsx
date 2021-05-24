import * as React from 'react';

import { MovieListItem } from '../../slices/list/listTypes';

import TablePoster from './TablePoster';
import RatingBtn from '../generic/RatingBtn';
import ColumnHeader from './ColumnHeader';

export const columns = [
  {
    property: 'poster',
    header: <ColumnHeader label='Poster' />,
    render: (datum: MovieListItem) => (
      <TablePoster size='w342' path={datum.posterPath} />
    ),
  },
  {
    property: 'title',
    header: <ColumnHeader label='Title' />,
  },
  {
    property: 'release_date',
    header: <ColumnHeader label='Release Date' />,
    render: (datum: MovieListItem) =>
      datum.releaseDate &&
      `${new Date(datum.releaseDate).toLocaleDateString('en-US', {
        month: 'long',
      })}, ${new Date(datum.releaseDate).toLocaleDateString('en-US', {
        year: 'numeric',
      })}`,
  },
  {
    property: 'runtime',
    header: <ColumnHeader label='Runtime' />,
    render: ({ runtime }: MovieListItem) => {
      return runtime === null
        ? '-'
        : runtime <= 60
        ? `${runtime}m`
        : `${Math.floor(runtime / 60)}h 
          ${runtime % 60}m`;
    },
  },
  {
    property: 'revenue',
    header: <ColumnHeader label='Revenue' />,
    render: (datum: MovieListItem) => `${datum.revenue} bucks`,
  },
  {
    property: 'user_rating',
    header: <ColumnHeader label='Rating' />,
    render: (datum: MovieListItem) => (
      <RatingBtn id={datum.id} rating={datum.rating} />
    ),
  },
];
