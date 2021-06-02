import { Text } from 'grommet';
import { MovieListItem } from '../../slices/list/listTypes';

import TablePoster from './TablePoster';
import RatingBtn from '../../shared/RatingBtn';

export const columns = [
  {
    property: 'poster',
    header: <Text weight='bold'>Poster</Text>,
    render: (datum: MovieListItem) => (
      <TablePoster size='w342' path={datum.posterPath} />
    ),
  },
  {
    property: 'title',
    header: <Text weight='bold'>Title</Text>,
  },
  {
    property: 'release_date',
    header: <Text weight='bold'>Release Date</Text>,
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
    header: <Text weight='bold'>Runtime</Text>,
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
    header: <Text weight='bold'>Revenue</Text>,
    render: (datum: MovieListItem) => `${datum.revenue} bucks`,
  },
  {
    property: 'user_rating',
    header: <Text weight='bold'>Rating</Text>,
    render: (datum: MovieListItem) => <RatingBtn id={datum.id} />,
  },
];
