/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import * as React from 'react';

import { MovieListItem } from '../../slices/list/listTypes';

import TablePoster from './TablePoster';
import RatingBtn from '../generic/RatingBtn';
import ColumnHeader from '../generic/ColumnHeader';

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
    property: 'user_rating',
    header: <ColumnHeader label='Rating' />,
    render: (datum: MovieListItem) => (
      // rendering the rating button in the data table
      // need to pass in the movie id and the rating, if there is one
      <RatingBtn id={datum.id} rating={datum.rating} />
    ),
  },
  {
    property: 'runtime',
    header: <ColumnHeader label='Runtime' />,
    render: ({ runtime }: MovieListItem) => {
      return runtime === null
        ? '-'
        : runtime <= 60
        ? `${runtime} m`
        : `${Math.floor(runtime / 60)} h 
          ${runtime % 60} m`;
    },
  },
  {
    property: 'revenue',
    header: <ColumnHeader label='Revenue' />,
    render: (datum: MovieListItem) => `${datum.runtime} bucks`,
  },
];

// export const exData: Array<MovieListItem> = [
//   {
//     id: 11,
//     posterPath: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
//     title: 'Star Wars',
//     releaseDate: '1977-05-25',
//     rating: 5,
//     runtime: 121,
//     revenue: 5000,
//   },
//   {
//     id: 11,
//     posterPath: '/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg',
//     title: 'Star Wars',
//     releaseDate: '1977-05-25',
//     rating: 0,
//     runtime: 121,
//     revenue: 5000,
//   },
//   {
//     id: 11,
//     posterPath: null,
//     title: 'Star Wars',
//     releaseDate: '1977-05-25',
//     rating: null,
//     runtime: 121,
//     revenue: 5000,
//   },
//   {
//     id: 11,
//     posterPath: null,
//     title: 'Star Wars',
//     releaseDate: '1977-05-25',
//     rating: null,
//     runtime: 121,
//     revenue: 5000,
//   },
// ];
